"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getDraftModeProviderForCacheScope: null,
    getExpectedRequestStore: null,
    getHmrRefreshHash: null,
    getPrerenderResumeDataCache: null,
    getRenderResumeDataCache: null,
    throwForMissingRequestStore: null,
    workUnitAsyncStorage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getDraftModeProviderForCacheScope: function() {
        return getDraftModeProviderForCacheScope;
    },
    getExpectedRequestStore: function() {
        return getExpectedRequestStore;
    },
    getHmrRefreshHash: function() {
        return getHmrRefreshHash;
    },
    getPrerenderResumeDataCache: function() {
        return getPrerenderResumeDataCache;
    },
    getRenderResumeDataCache: function() {
        return getRenderResumeDataCache;
    },
    throwForMissingRequestStore: function() {
        return throwForMissingRequestStore;
    },
    workUnitAsyncStorage: function() {
        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
    }
});
const _workunitasyncstorageinstance = require("./work-unit-async-storage-instance");
const _approuterheaders = require("../../client/components/app-router-headers");
function getExpectedRequestStore(callingExpression) {
    const workUnitStore = _workunitasyncstorageinstance.workUnitAsyncStorageInstance.getStore();
    if (!workUnitStore) {
        throwForMissingRequestStore(callingExpression);
    }
    switch(workUnitStore.type){
... (truncated for brevity)