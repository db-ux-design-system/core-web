type NextHandler<T> = (value: T) => void;
type ErrorHandler = (error: unknown) => void;
type CompleteHandler = () => void;
declare global {
    interface SymbolConstructor {
        readonly observable: symbol;
    }
}
export type Observer<T> = {
    next?: NextHandler<T>;
    error?: ErrorHandler;
    complete?: CompleteHandler;
};
export type SubscriptionLike = {
    closed?: boolean;
    unsubscribe: () => void;
};
export type Observable<T> = {
    subscribe: {
        (observer: Observer<T>): SubscriptionLike;
        (next?: NextHandler<T> | null, error?: ErrorHandler | null, complete?: CompleteHandler | null): SubscriptionLike;
    };
};
export type InteropObservable<T> = Observable<T> & AsyncIterable<T> & {
    readonly [Symbol.observable]: () => Observable<T>;
    readonly '@@observable': () => Observable<T>;
};
type ObservableController<T> = {
    observable: InteropObservable<T>;
    next: (value: T) => void;
    error: (error: unknown) => void;
    complete: () => void;
};
export declare const EMPTY: InteropObservable<never>;
export declare function createObservableController<T>(): ObservableController<T>;
type ObservableValue<T> = T extends Observable<infer Value> ? Value : never;
export declare function isObservableLike<T>(value: T): value is T & Observable<ObservableValue<T>>;
export declare function observableToAsyncIterable<T>(source: Observable<T>): AsyncIterable<T>;
export {};
