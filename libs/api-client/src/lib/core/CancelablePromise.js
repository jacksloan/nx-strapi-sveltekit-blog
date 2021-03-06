var _CancelablePromise_isPending, _CancelablePromise_isCancelled, _CancelablePromise_cancelHandlers, _CancelablePromise_promise, _CancelablePromise_resolve, _CancelablePromise_reject;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export class CancelError extends Error {
    constructor(reason = 'Promise was canceled') {
        super(reason);
        this.name = 'CancelError';
    }
    get isCancelled() {
        return true;
    }
}
export class CancelablePromise {
    constructor(executor) {
        _CancelablePromise_isPending.set(this, void 0);
        _CancelablePromise_isCancelled.set(this, void 0);
        _CancelablePromise_cancelHandlers.set(this, void 0);
        _CancelablePromise_promise.set(this, void 0);
        _CancelablePromise_resolve.set(this, void 0);
        _CancelablePromise_reject.set(this, void 0);
        __classPrivateFieldSet(this, _CancelablePromise_isPending, true, "f");
        __classPrivateFieldSet(this, _CancelablePromise_isCancelled, false, "f");
        __classPrivateFieldSet(this, _CancelablePromise_cancelHandlers, [], "f");
        __classPrivateFieldSet(this, _CancelablePromise_promise, new Promise((resolve, reject) => {
            __classPrivateFieldSet(this, _CancelablePromise_resolve, resolve, "f");
            __classPrivateFieldSet(this, _CancelablePromise_reject, reject, "f");
            const onResolve = (value) => {
                var _a;
                if (!__classPrivateFieldGet(this, _CancelablePromise_isCancelled, "f")) {
                    __classPrivateFieldSet(this, _CancelablePromise_isPending, false, "f");
                    (_a = __classPrivateFieldGet(this, _CancelablePromise_resolve, "f")) === null || _a === void 0 ? void 0 : _a.call(this, value);
                }
            };
            const onReject = (reason) => {
                var _a;
                __classPrivateFieldSet(this, _CancelablePromise_isPending, false, "f");
                (_a = __classPrivateFieldGet(this, _CancelablePromise_reject, "f")) === null || _a === void 0 ? void 0 : _a.call(this, reason);
            };
            const onCancel = (cancelHandler) => {
                if (__classPrivateFieldGet(this, _CancelablePromise_isPending, "f")) {
                    __classPrivateFieldGet(this, _CancelablePromise_cancelHandlers, "f").push(cancelHandler);
                }
            };
            Object.defineProperty(onCancel, 'isPending', {
                get: () => __classPrivateFieldGet(this, _CancelablePromise_isPending, "f"),
            });
            Object.defineProperty(onCancel, 'isCancelled', {
                get: () => __classPrivateFieldGet(this, _CancelablePromise_isCancelled, "f"),
            });
            return executor(onResolve, onReject, onCancel);
        }), "f");
    }
    then(onFulfilled, onRejected) {
        return __classPrivateFieldGet(this, _CancelablePromise_promise, "f").then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return __classPrivateFieldGet(this, _CancelablePromise_promise, "f").catch(onRejected);
    }
    finally(onFinally) {
        return __classPrivateFieldGet(this, _CancelablePromise_promise, "f").finally(onFinally);
    }
    cancel() {
        var _a;
        if (!__classPrivateFieldGet(this, _CancelablePromise_isPending, "f") || __classPrivateFieldGet(this, _CancelablePromise_isCancelled, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _CancelablePromise_isCancelled, true, "f");
        if (__classPrivateFieldGet(this, _CancelablePromise_cancelHandlers, "f").length) {
            try {
                for (const cancelHandler of __classPrivateFieldGet(this, _CancelablePromise_cancelHandlers, "f")) {
                    cancelHandler();
                }
            }
            catch (error) {
                (_a = __classPrivateFieldGet(this, _CancelablePromise_reject, "f")) === null || _a === void 0 ? void 0 : _a.call(this, error);
                return;
            }
        }
    }
    get isCancelled() {
        return __classPrivateFieldGet(this, _CancelablePromise_isCancelled, "f");
    }
}
_CancelablePromise_isPending = new WeakMap(), _CancelablePromise_isCancelled = new WeakMap(), _CancelablePromise_cancelHandlers = new WeakMap(), _CancelablePromise_promise = new WeakMap(), _CancelablePromise_resolve = new WeakMap(), _CancelablePromise_reject = new WeakMap(), Symbol.toStringTag;
//# sourceMappingURL=CancelablePromise.js.map