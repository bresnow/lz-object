export declare const checkIf: {
    isObject: (value: unknown) => boolean;
    isNumber: (value: unknown) => boolean;
    isBoolean: (value: unknown) => boolean;
    isString: (value: unknown) => boolean;
    isArray: (value: unknown) => boolean;
};
export declare const lzObject: {
    compress: (object: {
        [key: string]: any;
    }, { output }: {
        output: "uint8array" | "utf16" | "base64" | "uri";
    }) => any;
    decompress: (object: {
        [key: string]: any;
    }, { output }: {
        output: "uint8array" | "utf16" | "base64" | "uri";
    }) => any;
};
