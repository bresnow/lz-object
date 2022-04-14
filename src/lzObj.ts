import LZString from "lz-string";

export const checkIf = {
    isObject: (value: unknown) => {
        return !!(value && typeof value === "object" && !Array.isArray(value));
    },
    isNumber: (value: unknown) => {
        return !isNaN(Number(value));
    },
    isBoolean: (value: unknown) => {
        if (value === "true" || value === "false" || value === true || value === false) {
            return true
        }
    },
    isString: (value: unknown) => {
        return typeof value === "string";
    },
    isArray: (value: unknown) => {
        return Array.isArray(value);
    }
}

const findNestedObject = (object: any = {}, keyToMatch?: string | number | boolean, valueToMatch?: string | number | boolean) => {
    if (checkIf.isObject(object)) {
        const entries = Object.entries(object);

        for (let i = 0; i < entries.length; i += 1) {
            const [objectKey, objectValue] = entries[i];

            if (objectKey === keyToMatch && objectValue === valueToMatch) {
                return object;
            }
            if (checkIf.isObject(objectValue)) {
                const nestedLevel: any = findNestedObject(objectValue, keyToMatch && keyToMatch, valueToMatch && valueToMatch);

                if (nestedLevel !== null) {
                    return nestedLevel;
                }
            }
        }
    }

    return null;
};

export const lzObj = {
    compress: (object: { [key: string]: any }, { output = "utf16" }: { output: "uint8array" | "utf16" | "base64" | "uri" }) => {
        const obj = {}
        object = JSON.parse(JSON.stringify(object))
        if (checkIf.isObject(object)) {
            const entries = Object.entries(object);
            let compressedValue: any = undefined;
            let compressedKey: any = undefined;
            let entryArr: { [key: string]: any } = entries.map((entry, i, arr) => {
                let [objectKey, objectValue] = [entry[0], entry[1]];
                if (checkIf.isNumber(objectValue) || checkIf.isBoolean(objectValue)) {
                    objectValue = `${objectValue}`;
                }
                if (checkIf.isObject(objectValue)) {
                    if (output === "utf16") {
                        compressedKey = LZString.compressToUTF16(objectKey);
                    }
                    else if (output === "base64") {
                        compressedKey = LZString.compressToBase64(objectKey);
                    }
                    else if (output === "uri") {
                        compressedKey = LZString.compressToEncodedURIComponent(objectKey);
                    }
                    const nestedLevel: any = lzObj.compress(objectValue, { output });
                    return { [objectKey]: nestedLevel }
                }
                if (typeof objectValue === "string") {
                    if (output === "utf16") {
                        compressedValue = LZString.compressToUTF16(objectValue);
                        compressedKey = LZString.compressToUTF16(objectKey);
                        if (typeof compressedValue !== "undefined" && typeof compressedKey !== "undefined") {
                            return { [objectKey]: compressedValue }
                        };
                    }
                    if (output === "base64") {
                        compressedValue = LZString.compressToBase64(objectValue);
                        compressedKey = LZString.compressToBase64(objectKey);
                        if (typeof compressedValue !== "undefined" && typeof compressedKey !== "undefined") {
                            return { [objectKey]: compressedValue }
                        };
                    }
                    if (output === "uri") {
                        compressedValue = LZString.compressToEncodedURIComponent(objectValue);
                        compressedKey = LZString.compressToEncodedURIComponent(objectKey);
                        if (typeof compressedValue !== "undefined" && typeof compressedKey !== "undefined") {
                            return { [objectKey]: compressedValue }
                        };
                    }
                    if (output === "uint8array") {
                        compressedValue = LZString.compressToUint8Array(objectValue);
                        compressedKey = LZString.compressToUTF16(objectKey);
                        let indexedObj = {};
                        if (typeof compressedValue !== "undefined" && typeof compressedKey !== "undefined") {
                            let arr = Array.from(compressedValue);
                            for (let i = 0; i < arr.length; i++) {
                                Object.assign(indexedObj, { [i]: arr[i] });
                            }
                        }
                        return { [objectKey]: indexedObj }
                    }
                }
            })

            return entryArr.reduce((acc: { [key: string]: any }, curr: { [key: string]: any }, i: number, arr: any[]) => {
                return Object.assign({}, ...[acc], arr[i])
            })
        }

    },
    decompress: (object: { [key: string]: any }, { output = "utf16" }: { output: "uint8array" | "utf16" | "base64" | "uri" }) => {
        const obj = {}
        object = JSON.parse(JSON.stringify(object))
        if (checkIf.isObject(object)) {
            const entries = Object.entries(object);
            let decompressedValue: any = undefined;
            let decompressedKey: any = undefined;
            let entryArr: { [key: string]: any } = entries.map((entry, i, arr) => {
                let [objectKey, objectValue] = [entry[0], entry[1]];

                if (output === "uint8array") {
                    if (checkIf.isObject(objectValue) && Object.getOwnPropertyNames(objectValue).includes("0")) {
                        let arr: number[] = Object.values(objectValue);
                        let uint8 = Uint8Array.from(arr);
                        decompressedValue = LZString.decompressFromUint8Array(uint8);
                        decompressedKey = LZString.decompressFromUTF16(objectKey);
                        return { [objectKey]: decompressedValue }
                    }
                }
                if (typeof objectValue === "string") {
                    if (output === "utf16") {
                        decompressedValue = LZString.decompressFromUTF16(objectValue);
                        decompressedKey = LZString.decompressFromUTF16(objectKey);
                        if (typeof decompressedValue !== "undefined" && typeof decompressedKey !== "undefined") {
                            return { [objectKey]: decompressedValue }
                        };
                    }
                    if (output === "base64") {
                        decompressedValue = LZString.decompressFromBase64(objectValue);
                        decompressedKey = LZString.decompressFromBase64(objectKey);
                        if (typeof decompressedValue !== "undefined" && typeof decompressedKey !== "undefined") {
                            return { [objectKey]: decompressedValue }
                        };
                    }
                    if (output === "uri") {
                        decompressedValue = LZString.decompressFromEncodedURIComponent(objectValue);
                        decompressedKey = LZString.decompressFromEncodedURIComponent(objectKey);
                        if (typeof decompressedValue !== "undefined" && typeof decompressedKey !== "undefined") {
                            return { [objectKey]: decompressedValue }
                        };
                    }

                }
                if (checkIf.isObject(objectValue) || !Object.getOwnPropertyNames(objectValue).includes("0")) {
                    if (output === "utf16" || output === "uint8array") {
                        decompressedKey = LZString.decompressFromUTF16(`${objectKey}`);
                    }
                    else if (output === "base64") {
                        decompressedKey = LZString.decompressFromBase64(objectKey);
                    }
                    else if (output === "uri") {
                        decompressedKey = LZString.decompressFromEncodedURIComponent(objectKey);
                    }
                    const nestedLevel: any = lzObj.decompress(objectValue, { output });
                    return { [objectKey]: nestedLevel }
                }
            })

            return entryArr.reduce((acc: { [key: string]: any }, curr: { [key: string]: any }, i: number, arr: any[]) => {
                return Object.assign({}, ...[acc], arr[i])
            })
        }

    }
}

