const { lzObject } = require('./index');
const dummyObject = {
    key: 'ctrl+shift+r ctrl+e',
    command: true,
    args: { kind: 'refactor.extract.function' },
    src: 'gqRAV+/7HHd+3nPvs0njnG4+LUk0PUQlAvuzt6sFovqJ26d3W',
    textarea: '',
    title: 'hijlkmnop',
    _: {
        '#': 'NIJQtAYgZgmg',
        '>': {
            textarea: 649823555368,
            src: 1649823555368,
            title: 1649823555368
        }
    }
}
let compreddUint8 = lzObject.compress(dummyObject, { output: "uint8array" });
console.log(compreddUint8)
let decompressed = lzObject.decompress(compreddUint8, { output: "uint8array" });
console.log(decompressed)