"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.lzObject = exports.checkIf = void 0;
var lz_string_1 = __importDefault(require("lz-string"));
exports.checkIf = {
    isObject: function (value) {
        return !!(value && typeof value === "object" && !Array.isArray(value));
    },
    isNumber: function (value) {
        return !isNaN(Number(value));
    },
    isBoolean: function (value) {
        if (value === "true" || value === "false" || value === true || value === false) {
            return true;
        }
    },
    isString: function (value) {
        return typeof value === "string";
    },
    isArray: function (value) {
        return Array.isArray(value);
    }
};
var findNestedObject = function (object, keyToMatch, valueToMatch) {
    if (object === void 0) { object = {}; }
    if (exports.checkIf.isObject(object)) {
        var entries = Object.entries(object);
        for (var i = 0; i < entries.length; i += 1) {
            var _a = entries[i], objectKey = _a[0], objectValue = _a[1];
            if (objectKey === keyToMatch && objectValue === valueToMatch) {
                return object;
            }
            if (exports.checkIf.isObject(objectValue)) {
                var nestedLevel = findNestedObject(objectValue, keyToMatch && keyToMatch, valueToMatch && valueToMatch);
                if (nestedLevel !== null) {
                    return nestedLevel;
                }
            }
        }
    }
    return null;
};
exports.lzObject = {
    compress: function (object, _a) {
        var _b = _a.output, output = _b === void 0 ? "utf16" : _b;
        var obj = {};
        // object = JSON.parse(JSON.stringify(object))
        if (exports.checkIf.isObject(object)) {
            var entries = Object.entries(object);
            var compressedValue_1 = undefined;
            var compressedKey_1 = undefined;
            var entryArr = entries.map(function (entry, i, arr) {
                var _a, _b, _c, _d, _e, _f;
                var _g = [entry[0], entry[1]], objectKey = _g[0], objectValue = _g[1];
                if (exports.checkIf.isNumber(objectValue) || exports.checkIf.isBoolean(objectValue)) {
                    objectValue = "".concat(objectValue);
                }
                if (exports.checkIf.isObject(objectValue)) {
                    if (output === "utf16") {
                        compressedKey_1 = lz_string_1["default"].compressToUTF16(objectKey);
                    }
                    else if (output === "base64") {
                        compressedKey_1 = lz_string_1["default"].compressToBase64(objectKey);
                    }
                    else if (output === "uri") {
                        compressedKey_1 = lz_string_1["default"].compressToEncodedURIComponent(objectKey);
                    }
                    var nestedLevel = exports.lzObject.compress(objectValue, { output: output });
                    return _a = {}, _a[objectKey] = nestedLevel, _a;
                }
                if (typeof objectValue === "string") {
                    if (output === "utf16") {
                        compressedValue_1 = lz_string_1["default"].compressToUTF16(objectValue);
                        compressedKey_1 = lz_string_1["default"].compressToUTF16(objectKey);
                        if (typeof compressedValue_1 !== "undefined" && typeof compressedKey_1 !== "undefined") {
                            return _b = {}, _b[objectKey] = compressedValue_1, _b;
                        }
                        ;
                    }
                    if (output === "base64") {
                        compressedValue_1 = lz_string_1["default"].compressToBase64(objectValue);
                        compressedKey_1 = lz_string_1["default"].compressToBase64(objectKey);
                        if (typeof compressedValue_1 !== "undefined" && typeof compressedKey_1 !== "undefined") {
                            return _c = {}, _c[objectKey] = compressedValue_1, _c;
                        }
                        ;
                    }
                    if (output === "uri") {
                        compressedValue_1 = lz_string_1["default"].compressToEncodedURIComponent(objectValue);
                        compressedKey_1 = lz_string_1["default"].compressToEncodedURIComponent(objectKey);
                        if (typeof compressedValue_1 !== "undefined" && typeof compressedKey_1 !== "undefined") {
                            return _d = {}, _d[objectKey] = compressedValue_1, _d;
                        }
                        ;
                    }
                    if (output === "uint8array") {
                        compressedValue_1 = lz_string_1["default"].compressToUint8Array(objectValue);
                        compressedKey_1 = lz_string_1["default"].compressToUTF16(objectKey);
                        var indexedObj = {};
                        if (typeof compressedValue_1 !== "undefined" && typeof compressedKey_1 !== "undefined") {
                            var arr_1 = Array.from(compressedValue_1);
                            for (var i_1 = 0; i_1 < arr_1.length; i_1++) {
                                Object.assign(indexedObj, (_e = {}, _e[i_1] = arr_1[i_1], _e));
                            }
                        }
                        return _f = {}, _f[objectKey] = indexedObj, _f;
                    }
                }
            });
            return entryArr.reduce(function (acc, curr, i, arr) {
                return Object.assign.apply(Object, __spreadArray(__spreadArray([{}], [acc], false), [arr[i]], false));
            });
        }
    },
    decompress: function (object, _a) {
        var _b = _a.output, output = _b === void 0 ? "utf16" : _b;
        var obj = {};
        // object = JSON.parse(JSON.stringify(object))
        if (exports.checkIf.isObject(object)) {
            var entries = Object.entries(object);
            var decompressedValue_1 = undefined;
            var decompressedKey_1 = undefined;
            var entryArr = entries.map(function (entry, i, arr) {
                var _a, _b, _c, _d, _e;
                var _f = [entry[0], entry[1]], objectKey = _f[0], objectValue = _f[1];
                if (output === "uint8array") {
                    if (exports.checkIf.isObject(objectValue) && Object.getOwnPropertyNames(objectValue).includes("0")) {
                        var arr_2 = Object.values(objectValue);
                        var uint8 = Uint8Array.from(arr_2);
                        decompressedValue_1 = lz_string_1["default"].decompressFromUint8Array(uint8);
                        decompressedKey_1 = lz_string_1["default"].decompressFromUTF16(objectKey);
                        return _a = {}, _a[objectKey] = decompressedValue_1, _a;
                    }
                }
                if (typeof objectValue === "string") {
                    if (output === "utf16") {
                        decompressedValue_1 = lz_string_1["default"].decompressFromUTF16(objectValue);
                        decompressedKey_1 = lz_string_1["default"].decompressFromUTF16(objectKey);
                        if (typeof decompressedValue_1 !== "undefined" && typeof decompressedKey_1 !== "undefined") {
                            return _b = {}, _b[objectKey] = decompressedValue_1, _b;
                        }
                        ;
                    }
                    if (output === "base64") {
                        decompressedValue_1 = lz_string_1["default"].decompressFromBase64(objectValue);
                        decompressedKey_1 = lz_string_1["default"].decompressFromBase64(objectKey);
                        if (typeof decompressedValue_1 !== "undefined" && typeof decompressedKey_1 !== "undefined") {
                            return _c = {}, _c[objectKey] = decompressedValue_1, _c;
                        }
                        ;
                    }
                    if (output === "uri") {
                        decompressedValue_1 = lz_string_1["default"].decompressFromEncodedURIComponent(objectValue);
                        decompressedKey_1 = lz_string_1["default"].decompressFromEncodedURIComponent(objectKey);
                        if (typeof decompressedValue_1 !== "undefined" && typeof decompressedKey_1 !== "undefined") {
                            return _d = {}, _d[objectKey] = decompressedValue_1, _d;
                        }
                        ;
                    }
                }
                if (exports.checkIf.isObject(objectValue) || !Object.getOwnPropertyNames(objectValue).includes("0")) {
                    if (output === "utf16" || output === "uint8array") {
                        decompressedKey_1 = lz_string_1["default"].decompressFromUTF16("".concat(objectKey));
                    }
                    else if (output === "base64") {
                        decompressedKey_1 = lz_string_1["default"].decompressFromBase64(objectKey);
                    }
                    else if (output === "uri") {
                        decompressedKey_1 = lz_string_1["default"].decompressFromEncodedURIComponent(objectKey);
                    }
                    var nestedLevel = exports.lzObject.decompress(objectValue, { output: output });
                    return _e = {}, _e[objectKey] = nestedLevel, _e;
                }
            });
            return entryArr.reduce(function (acc, curr, i, arr) {
                return Object.assign.apply(Object, __spreadArray(__spreadArray([{}], [acc], false), [arr[i]], false));
            });
        }
    }
};
