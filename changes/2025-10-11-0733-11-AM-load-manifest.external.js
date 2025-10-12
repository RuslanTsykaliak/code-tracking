"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    clearManifestCache: null,
    evalManifest: null,
    loadManifest: null,
    loadManifestFromRelativePath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearManifestCache: function() {
        return clearManifestCache;
    },
    evalManifest: function() {
        return evalManifest;
    },
    loadManifest: function() {
        return loadManifest;
    },
    loadManifestFromRelativePath: function() {
        return loadManifestFromRelativePath;
    }
});
const _path = require("path");
const _fs = require("fs");
const _vm = require("vm");
const _deepfreeze = require("../shared/lib/deep-freeze");
const sharedCache = new Map();
function loadManifest(path, shouldCache = true, cache = sharedCache, skipParse = false) {
    const cached = shouldCache && cache.get(path);
    if (cached) {
        return cached;
    }
    let manifest = (0, _fs.readFileSync)(/* turbopackIgnore: true */ path, 'utf8');
    if (!skipParse) {
        manifest = JSON.parse(manifest);
        // Freeze the manifest so it cannot be modified if we're caching it.
        if (shouldCache) {
            manifest = (0, _deepfreeze.deepFreeze)(manifest);
        }
    }
    if (shouldCache) {
        cache.set(path, manifest);
... (truncated for brevity)