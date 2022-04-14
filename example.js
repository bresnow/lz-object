"use strict";
exports.__esModule = true;
var index_1 = require("./src/index");
var dummy = {
    key: "ctrl+shift+r ctrl+e",
    command: "editor.action.codeAction",
    args: {
        kind: "refactor.extract.function"
    },
    src: "gqRAV+/7HHd+3nPvs0njnG4+LUk0PUQlAvuzt6sFovqJ26d3W",
    textarea: "",
    title: "hijlkmnop",
    _: {
        '#': "NIJQtAYgZgmg",
        '>': { textarea: 1649823555368, src: 1649823555368, title: 1649823555368 }
    }
};
var compressedUri = index_1.lzObj.compress(dummy, { output: "uri" });
console.group("COMPRESSED");
console.group("encoded uri component");
console.log(compressedUri);
console.groupEnd();
var compreddUint8 = index_1.lzObj.compress(dummy, { output: "uint8array" });
console.group("uint8array indexed into object");
console.log(compreddUint8);
console.groupEnd();
console.group("utf16");
var compressedUtf16 = index_1.lzObj.compress(dummy, { output: "utf16" });
console.log(compressedUtf16);
console.groupEnd();
console.group("base64");
var compressedB64 = index_1.lzObj.compress(dummy, { output: "base64" });
console.log(compressedB64);
console.groupEnd();
console.log("*****************************************************");
console.group("DECOMPRESSED");
console.group("encoded uri component");
var decompUri = index_1.lzObj.decompress(compressedUri, { output: "uri" });
console.log(decompUri);
console.groupEnd();
console.group("base64");
var decompB64 = index_1.lzObj.decompress(compressedB64, { output: "base64" });
console.groupEnd();
console.log(decompB64);
console.group("uint8array");
var decompUint8 = index_1.lzObj.decompress(compreddUint8, { output: "uint8array" });
console.groupEnd();
console.log(decompUint8);
console.groupEnd();
console.group("utf16");
var decompUtf16 = index_1.lzObj.decompress(compressedUtf16, { output: "utf16" });
console.log(decompUtf16);
console.groupEnd();
