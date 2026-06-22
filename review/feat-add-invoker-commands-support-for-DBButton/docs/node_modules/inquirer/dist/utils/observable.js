function getObservableSymbol() {
    const symbolConstructor = Symbol;
    return typeof symbolConstructor.observable === 'symbol'
        ? symbolConstructor.observable
        : '@@observable';
}
function normalizeObserver(observerOrNext, error, complete) {
    if (typeof observerOrNext === 'function') {
        return {
            next: observerOrNext,
            ...(error ? { error } : {}),
            ...(complete ? { complete } : {}),
        };
    }
    return observerOrNext ?? {};
}
function reportObserverError(error) {
    queueMicrotask(() => {
        throw error;
    });
}
function callObserver(callback) {
    try {
        callback();
    }
    catch (error) {
        reportObserverError(error);
    }
}
function createClosedSubscription() {
    return {
        closed: true,
        unsubscribe() { },
    };
}
function toError(error) {
    return error instanceof Error ? error : new Error(String(error));
}
function runTeardown(teardown) {
    if (typeof teardown === 'function') {
        teardown();
    }
    else {
        teardown?.unsubscribe();
    }
}
class ObservableImpl {
    '@@observable' = () => this;
    subscribeFn;
    constructor(subscribeFn) {
        this.subscribeFn = subscribeFn;
        Object.defineProperty(this, getObservableSymbol(), {
            configurable: true,
            value: () => this,
        });
    }
    subscribe(observerOrNext, error, complete) {
        const observer = normalizeObserver(observerOrNext, error, complete);
        let closed = false;
        let teardown;
        let teardownReady = false;
        const subscription = {
            get closed() {
                return closed;
            },
            unsubscribe() {
                if (closed) {
                    return;
                }
                closed = true;
                if (teardownReady) {
                    runTeardown(teardown);
                }
            },
        };
        const safeObserver = {
            next(value) {
                if (!closed) {
                    callObserver(() => observer.next?.(value));
                }
            },
            error(error) {
                if (closed) {
                    return;
                }
                closed = true;
                if (observer.error) {
                    callObserver(() => observer.error?.(error));
                }
                else {
                    reportObserverError(error);
                }
                if (teardownReady) {
                    runTeardown(teardown);
                }
            },
            complete() {
                if (closed) {
                    return;
                }
                closed = true;
                callObserver(() => observer.complete?.());
                if (teardownReady) {
                    runTeardown(teardown);
                }
            },
        };
        try {
            teardown = this.subscribeFn(safeObserver);
            teardownReady = true;
            if (subscription.closed) {
                runTeardown(teardown);
            }
        }
        catch (error) {
            safeObserver.error?.(error);
        }
        return subscription;
    }
    [Symbol.asyncIterator]() {
        return observableToAsyncIterable(this)[Symbol.asyncIterator]();
    }
}
export const EMPTY = new ObservableImpl((observer) => {
    observer.complete?.();
    return createClosedSubscription();
});
export function createObservableController() {
    const observers = new Set();
    let completed = false;
    let errored = false;
    let thrownError;
    const observable = new ObservableImpl((observer) => {
        if (errored) {
            observer.error?.(thrownError);
            return createClosedSubscription();
        }
        if (completed) {
            observer.complete?.();
            return createClosedSubscription();
        }
        const entry = {
            observer,
            subscription: {
                closed: false,
                unsubscribe() {
                    entry.subscription.closed = true;
                    observers.delete(entry);
                },
            },
        };
        observers.add(entry);
        return entry.subscription;
    });
    return {
        observable,
        next(value) {
            if (completed || errored) {
                return;
            }
            for (const { observer, subscription } of observers) {
                if (!subscription.closed) {
                    callObserver(() => observer.next?.(value));
                }
            }
        },
        error(error) {
            if (completed || errored) {
                return;
            }
            errored = true;
            thrownError = error;
            for (const { observer, subscription } of observers) {
                subscription.closed = true;
                callObserver(() => observer.error?.(error));
            }
            observers.clear();
        },
        complete() {
            if (completed || errored) {
                return;
            }
            completed = true;
            for (const { observer, subscription } of observers) {
                subscription.closed = true;
                callObserver(() => observer.complete?.());
            }
            observers.clear();
        },
    };
}
export function isObservableLike(value) {
    return ((typeof value === 'object' || typeof value === 'function') &&
        value != null &&
        'subscribe' in value &&
        typeof value.subscribe === 'function');
}
export function observableToAsyncIterable(source) {
    return {
        [Symbol.asyncIterator]() {
            const values = [];
            const pending = [];
            let completed = false;
            let errored = false;
            let thrownError;
            let subscription;
            const resolvePending = (result) => {
                while (pending.length > 0) {
                    pending.shift()?.resolve(result);
                }
            };
            const rejectPending = (error) => {
                while (pending.length > 0) {
                    pending.shift()?.reject(error);
                }
            };
            const iterator = {
                next() {
                    const item = values.shift();
                    if (item) {
                        return Promise.resolve({ done: false, value: item.value });
                    }
                    if (errored) {
                        return Promise.reject(thrownError ?? new Error('Observable source failed'));
                    }
                    if (completed) {
                        return Promise.resolve({ done: true, value: undefined });
                    }
                    return new Promise((resolve, reject) => {
                        pending.push({ resolve, reject });
                    });
                },
                return() {
                    completed = true;
                    values.length = 0;
                    subscription?.unsubscribe();
                    resolvePending({ done: true, value: undefined });
                    return Promise.resolve({ done: true, value: undefined });
                },
            };
            try {
                subscription = source.subscribe({
                    next(value) {
                        if (completed || errored) {
                            return;
                        }
                        const pendingIterator = pending.shift();
                        if (pendingIterator) {
                            pendingIterator.resolve({ done: false, value });
                            return;
                        }
                        values.push({ value });
                    },
                    error(error) {
                        if (completed || errored) {
                            return;
                        }
                        values.length = 0;
                        errored = true;
                        thrownError = toError(error);
                        rejectPending(thrownError);
                        subscription?.unsubscribe();
                    },
                    complete() {
                        if (completed || errored) {
                            return;
                        }
                        completed = true;
                        resolvePending({ done: true, value: undefined });
                    },
                });
            }
            catch (error) {
                values.length = 0;
                errored = true;
                thrownError = toError(error);
                rejectPending(thrownError);
            }
            return iterator;
        },
    };
}
