/// <reference types="webpack/module.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Head: null,
    Html: null,
    Main: null,
    NextScript: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Head: function() {
        return Head;
    },
    Html: function() {
        return Html;
    },
    Main: function() {
        return Main;
    },
    NextScript: function() {
        return NextScript;
    },
    /**
 * `Document` component handles the initial `document` markup and renders only on the server side.
 * Commonly used for implementing server side rendering for `css-in-js` libraries.
 */ default: function() {
        return Document;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _constants = require("../shared/lib/constants");
const _getpagefiles = require("../server/get-page-files");
const _htmlescape = require("../server/htmlescape");
const _iserror = /*#__PURE__*/ _interop_require_default(require("../lib/is-error"));
const _htmlcontextsharedruntime = require("../shared/lib/html-context.shared-runtime");
const _encodeuripath = require("../shared/lib/encode-uri-path");
const _tracer = require("../server/lib/trace/tracer");
const _utils = require("../server/lib/trace/utils");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
... (truncated for brevity)