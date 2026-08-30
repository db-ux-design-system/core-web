/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment */
import readline from 'node:readline';
import runAsync from 'run-async';
import MuteStream from 'mute-stream';
import { AbortPromptError } from '@inquirer/core';
import { cursorShow } from '@inquirer/ansi';
import { EMPTY, createObservableController, isObservableLike, observableToAsyncIterable, } from "../utils/observable.js";
export const _ = {
    set: (obj, path = '', value) => {
        let pointer = obj;
        path.split('.').forEach((key, index, arr) => {
            if (key === '__proto__' || key === 'constructor')
                return;
            if (index === arr.length - 1) {
                pointer[key] = value;
            }
            else if (!(key in pointer) || typeof pointer[key] !== 'object') {
                pointer[key] = {};
            }
            // oxlint-disable-next-line typescript/no-unsafe-type-assertion
            pointer = pointer[key];
        });
    },
    get: (obj, path = '', defaultValue) => {
        const travel = (regexp) => String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce(
        // @ts-expect-error implicit any on res[key]
        (res, key) => (res == null ? res : res[key]), obj);
        const result = travel(/[,[\]]+?/) || travel(/[,.[\]]+?/);
        return result === undefined || result === obj ? defaultValue : result;
    },
};
/**
 * Resolve a question property value if it is passed as a function.
 * This method will overwrite the property on the question object with the received value.
 */
async function fetchAsyncQuestionProperty(question, prop, answers) {
    const propGetter = question[prop];
    if (typeof propGetter === 'function') {
        // oxlint-disable-next-line typescript/no-unsafe-type-assertion
        return runAsync(propGetter)(answers);
    }
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion
    return propGetter;
}
class UnknownPromptTypeError extends Error {
    name = 'UnknownPromptTypeError';
    constructor(type, prompts) {
        const availableTypes = Object.keys(prompts).toSorted().join(', ');
        super(`Prompt type "${type}" is not registered. Available prompt types: ${availableTypes}`);
    }
}
class TTYError extends Error {
    name = 'TTYError';
    isTtyError = true;
}
function setupReadlineOptions(opt) {
    // Inquirer 8.x:
    // opt.skipTTYChecks = opt.skipTTYChecks === undefined ? opt.input !== undefined : opt.skipTTYChecks;
    opt.skipTTYChecks = opt.skipTTYChecks === undefined ? true : opt.skipTTYChecks;
    // Default `input` to stdin
    const input = opt.input || process.stdin;
    // Check if prompt is being called in TTY environment
    // If it isn't return a failed promise
    // @ts-expect-error: ignore isTTY type error
    if (!opt.skipTTYChecks && !input.isTTY) {
        throw new TTYError('Prompts can not be meaningfully rendered in non-TTY environments');
    }
    // Add mute capabilities to the output
    const ms = new MuteStream();
    ms.pipe(opt.output || process.stdout);
    const output = ms;
    return {
        terminal: true,
        ...opt,
        input,
        output,
    };
}
function isQuestionArray(questions) {
    return Array.isArray(questions);
}
function isQuestionMap(questions) {
    return Object.values(questions).every((maybeQuestion) => typeof maybeQuestion === 'object' &&
        !Array.isArray(maybeQuestion) &&
        maybeQuestion != null);
}
function isPromptConstructor(prompt) {
    return Boolean(prompt.prototype &&
        'run' in prompt.prototype &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        typeof prompt.prototype.run === 'function');
}
/**
 * Base interface class other can inherits from
 */
export default class PromptsRunner {
    prompts;
    answers = {};
    process = EMPTY;
    abortController = new AbortController();
    opt;
    constructor(prompts, opt = {}) {
        this.opt = opt;
        this.prompts = prompts;
    }
    async run(questions, answers) {
        this.abortController = new AbortController();
        const processController = createObservableController();
        this.process = processController.observable;
        // Keep global reference to the answers
        this.answers = typeof answers === 'object' ? { ...answers } : {};
        try {
            for await (const question of this.getQuestions(questions)) {
                if (await this.shouldRun(question)) {
                    const answer = await this.fetchAnswer(question);
                    _.set(this.answers, answer.name, answer.answer);
                    processController.next(answer);
                }
            }
            processController.complete();
            // oxlint-disable-next-line typescript/no-unsafe-type-assertion
            return this.answers;
        }
        catch (error) {
            processController.error(error);
            throw error;
        }
        finally {
            this.close();
        }
    }
    async *getQuestions(questions) {
        if (isQuestionArray(questions)) {
            yield* questions;
        }
        else if (isObservableLike(questions)) {
            yield* observableToAsyncIterable(questions);
        }
        else if (isQuestionMap(questions)) {
            // Case: Called with a set of { name: question }
            for (const [name, question] of Object.entries(questions)) {
                yield Object.assign({}, question, { name });
            }
        }
        else {
            // Case: Called with a single question config
            yield questions;
        }
    }
    prepareQuestion = async (question) => {
        const type = question.type ?? 'input';
        if (!Object.hasOwn(this.prompts, type)) {
            throw new UnknownPromptTypeError(type, this.prompts);
        }
        const [message, defaultValue, resolvedChoices] = await Promise.all([
            fetchAsyncQuestionProperty(question, 'message', this.answers),
            fetchAsyncQuestionProperty(question, 'default', this.answers),
            fetchAsyncQuestionProperty(question, 'choices', this.answers),
        ]);
        let choices;
        if (Array.isArray(resolvedChoices)) {
            choices = resolvedChoices.map((choice) => {
                const choiceObj = typeof choice !== 'object' || choice == null
                    ? { name: choice, value: choice }
                    : {
                        ...choice,
                        value: 'value' in choice
                            ? choice.value
                            : 'name' in choice
                                ? choice.name
                                : undefined,
                    };
                if ('value' in choiceObj && Array.isArray(defaultValue)) {
                    // Add checked to question for backward compatibility. default was supported as alternative of per choice checked.
                    return {
                        checked: defaultValue.includes(choiceObj.value),
                        ...choiceObj,
                    };
                }
                return choiceObj;
            });
        }
        // Wrap the validate function to pass answers as second parameter for backward compatibility
        const wrappedQuestion = Object.assign({}, question, {
            message,
            default: defaultValue,
            choices,
            type,
        });
        if (question.validate) {
            const originalValidate = question.validate;
            wrappedQuestion.validate = (value) => {
                return originalValidate(value, this.answers);
            };
        }
        return wrappedQuestion;
    };
    fetchAnswer = async (rawQuestion) => {
        const question = await this.prepareQuestion(rawQuestion);
        const prompt = this.prompts[question.type];
        if (prompt == null) {
            throw new Error(`Prompt for type ${question.type} not found`);
        }
        let cleanupSignal;
        const promptFn = isPromptConstructor(prompt)
            ? (q, opt) => new Promise((resolve, reject) => {
                const { signal } = opt;
                if (signal.aborted) {
                    reject(new AbortPromptError({ cause: signal.reason }));
                    return;
                }
                // oxlint-disable-next-line typescript/no-unsafe-type-assertion
                const rl = readline.createInterface(setupReadlineOptions(opt));
                /**
                 * Handle the ^C exit
                 */
                const onForceClose = () => {
                    this.close();
                    process.kill(process.pid, 'SIGINT');
                    console.log('');
                };
                const onClose = () => {
                    process.removeListener('exit', onForceClose);
                    rl.removeListener('SIGINT', onForceClose);
                    rl.setPrompt('');
                    rl.output.unmute();
                    rl.output.write(cursorShow);
                    // Reset cursor to column 0. On Windows terminals, \n moves the
                    // cursor down without resetting the column when the rendered
                    // prompt+answer wraps past the terminal width. Without this,
                    // all subsequent output starts at the wrong horizontal offset.
                    readline.cursorTo(rl.output, 0);
                    rl.output.end();
                    rl.close();
                };
                // Make sure new prompt start on a newline when closing
                process.on('exit', onForceClose);
                rl.on('SIGINT', onForceClose);
                const activePrompt = new prompt(q, rl, this.answers);
                const cleanup = () => {
                    onClose();
                    cleanupSignal?.();
                };
                const abort = () => {
                    reject(new AbortPromptError({ cause: signal.reason }));
                    cleanup();
                };
                signal.addEventListener('abort', abort);
                cleanupSignal = () => {
                    signal.removeEventListener('abort', abort);
                    cleanupSignal = undefined;
                };
                activePrompt.run().then(resolve, reject).finally(cleanup);
            })
            : prompt;
        let cleanupModuleSignal;
        const { signal: moduleSignal } = this.opt;
        if (moduleSignal?.aborted) {
            this.abortController.abort(moduleSignal.reason);
        }
        else if (moduleSignal) {
            const abort = () => this.abortController.abort(moduleSignal.reason);
            moduleSignal.addEventListener('abort', abort);
            cleanupModuleSignal = () => {
                moduleSignal.removeEventListener('abort', abort);
            };
        }
        const { filter = (value) => value } = question;
        const { signal } = this.abortController;
        return promptFn(question, { ...this.opt, signal })
            .then((answer) => ({
            name: question.name,
            answer: filter(answer, this.answers),
        }))
            .finally(() => {
            cleanupSignal?.();
            cleanupModuleSignal?.();
        });
    };
    /**
     * Close the interface and cleanup listeners
     */
    close = () => {
        this.abortController.abort();
    };
    shouldRun = async (question) => {
        if (question.askAnswered !== true &&
            _.get(this.answers, question.name) !== undefined) {
            return false;
        }
        const { when } = question;
        if (typeof when === 'function') {
            const shouldRun = await runAsync(when)(this.answers);
            return Boolean(shouldRun);
        }
        return when !== false;
    };
}
