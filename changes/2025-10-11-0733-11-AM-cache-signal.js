/**
 * This class is used to detect when all cache reads for a given render are settled.
 * We do this to allow for cache warming the prerender without having to continue rendering
 * the remainder of the page. This feature is really only useful when the dynamicIO flag is on
 * and should only be used in codepaths gated with this feature.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CacheSignal", {
    enumerable: true,
    get: function() {
        return CacheSignal;
    }
});
const _invarianterror = require("../../shared/lib/invariant-error");
class CacheSignal {
    constructor(){
        this.count = 0;
        this.earlyListeners = [];
        this.listeners = [];
        this.tickPending = false;
        this.taskPending = false;
        this.subscribedSignals = null;
        if (process.env.NEXT_RUNTIME === 'edge') {
            // we rely on `process.nextTick`, which is not supported in edge
            throw Object.defineProperty(new _invarianterror.InvariantError('CacheSignal cannot be used in the edge runtime, because `dynamicIO` does not support it.'), "__NEXT_ERROR_CODE", {
                value: "E685",
                enumerable: false,
                configurable: true
            });
        }
    }
    noMorePendingCaches() {
        if (!this.tickPending) {
            this.tickPending = true;
            process.nextTick(()=>{
                this.tickPending = false;
                if (this.count === 0) {
                    for(let i = 0; i < this.earlyListeners.length; i++){
                        this.earlyListeners[i]();
                    }
                    this.earlyListeners.length = 0;
                }
            });
        }
        if (!this.taskPending) {
            this.taskPending = true;
            setTimeout(()=>{
                this.taskPending = false;
... (truncated for brevity)