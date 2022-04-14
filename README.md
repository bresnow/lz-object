# lz-object - lzObject - compress the size of object properties and values

Using the [lz-string](https://pieroxy.net/blog/pages/lz-string/index.html) library I wrote a program to traverse nested levels of a javascript object and compress the  property values to optimize storage. 

Output argument:

- "utf16" : produces "valid" UTF-16 strings in the sense that all browsers can store them safely. So they can be stored in localStorage on all browsers tested (IE9-10, Firefox, Android, Chrome, Safari).
  
- "uri" produces ASCII strings representing the original string encoded in Base64 with a few tweaks to make these URI safe. Hence, you can send them to the server without thinking about URL encoding them. This saves bandwidth and CPU.

- "base64" : produces ASCII UTF-16 strings representing the original string encoded in Base64. Can be decompressed with decompressFromBase64. This works by using only 6bits of storage per character.

- "uint8array": produces an indexed object of the array converted from a Uint8Array. I specifically did it this way because of my work with [GUN](https://github.com/amark/gun.git). The database cannot store arrays so converting to an indexed object met a personal need. Converting it back to Uint8Array is simple enough so I may update. I have no need to do so now. *Property names are compressed to utf-16.

## Usage

```terminal
yarn add lz-object
```

import lzObject

```javascript
import  { lzObject } from "lz-object";

OR

let { lzObject } = require("lz-object");

```

The uncompressed object is the first argument and the second argument is the output option. Decompress method works the same way.

```javascript

let compressedUtf16 = lzObject.compress(dummyObject, { output: "utf16" });
// console.log(compressedUtf16)

let compressedUri = lzObject.compress(dummyObject, { output: "uri" });
// console.log(compressedUri)
let compressedB64 = lzObject.compress(dummyObject, { output: "base64" });
// console.log(compressedB64)
let compreddUint8 = lzObject.compress(dummyObject, { output: "uint8array" });
// console.log(compreddUint8)

```

### The Compressed Output

```javascript
COMPRESSED
  encoded uri component
    {
      key: 'MYFwTgNg1AzgFgSwGYimABKSUCmQ',
      command: 'KYEwlgLg9gTgdAQwMYTFAdnJUTAIIprpA',
      args: { kind: 'E4UwZghgxgLg9sAdCAHjY0aLAVwHawCWceQA' },
      src: 'OYRwSgggag1A9AdgBJICYwMwDsAKA3AZwAYsArLAcQBYYAZAVQGsid6BFAGwjwFcAvAC4A2AgDEA9nhAApAExDUGAOpA',
      textarea: 'Q',
      title: 'BYSwVgNg1gtgdgewA5A',
      _: {
        '#': 'HISQUgigLgggmgcwFoILYKA',
        '>': {
          textarea: 'IwNgLAnAHATAzAViXEUg',
          src: 'IwNgLAnAHATAzAViXEUg',
          title: 'IwNgLAnAHATAzAViXEUg'
        }
      }
    }
  uint8array indexed into object
    {
      key: {
        '0': 49,
        '1': 129,
        '2': 112,
        '3': 78,
        '4': 3,
        '5': 96,
        '6': 212,
        '7': 12,
        '8': 224,
        '9': 22,
        '10': 4,
        '11': 176,
        '12': 25,
        '13': 136,
        '14': 166,
        '15': 0,
        '16': 18,
        '17': 146,
        '18': 80,
        '19': 41,
        '20': 144,
        '21': 0
      },
      command: {
        '0': 41,
        '1': 129,
        '2': 48,
        '3': 150,
        '4': 2,
        '5': 224,
        '6': 246,
        '7': 4,
        '8': 224,
        '9': 116,
        '10': 4,
        '11': 48,
        '12': 49,
        '13': 132,
        '14': 197,
        '15': 1,
        '16': 217,
        '17': 201,
        '18': 81,
        '19': 48,
        '20': 8,
        '21': 34,
        '22': 154,
        '23': 233,
        '24': 0,
        '25': 0
      },
      args: {
        kind: {
          '0': 19,
          '1': 133,
          '2': 48,
          '3': 102,
          '4': 8,
          '5': 96,
          '6': 198,
          '7': 2,
          '8': 224,
          '9': 246,
          '10': 192,
          '11': 29,
          '12': 8,
          '13': 1,
          '14': 227,
          '15': 99,
          '16': 70,
          '17': 139,
          '18': 1,
          '19': 92,
          '20': 7,
          '21': 107,
          '22': 0,
          '23': 150,
          '24': 113,
          '25': 228,
          '26': 0,
          '27': 0
        }
      },
      src: {
        '0': 57,
        '1': 132,
        '2': 112,
        '3': 74,
        '4': 8,
        '5': 32,
        '6': 106,
        '7': 13,
        '8': 64,
        '9': 244,
        '10': 7,
        '11': 96,
        '12': 4,
        '13': 146,
        '14': 2,
        '15': 99,
        '16': 3,
        '17': 48,
        '18': 14,
        '19': 192,
        '20': 10,
        '21': 3,
        '22': 112,
        '23': 25,
        '24': 192,
        '25': 6,
        '26': 44,
        '27': 2,
        '28': 178,
        '29': 192,
        '30': 113,
        '31': 0,
        '32': 88,
        '33': 96,
        '34': 6,
        '35': 64,
        '36': 85,
        '37': 1,
        '38': 172,
        '39': 137,
        '40': 222,
        '41': 129,
        '42': 20,
        '43': 1,
        '44': 176,
        '45': 143,
        '46': 1,
        '47': 92,
        '48': 2,
        '49': 240,
        '50': 2,
        '51': 224,
        '52': 13,
        '53': 128,
        '54': 128,
        '55': 49,
        '56': 0,
        '57': 246,
        '58': 120,
        '59': 64,
        '60': 2,
        '61': 144,
        '62': 4,
        '63': 196,
        '64': 53,
        '65': 6,
        '66': 0,
        '67': 234,
        '68': 64,
        '69': 0
      },
      textarea: { '0': 64, '1': 0 },
      title: {
        '0': 5,
        '1': 132,
        '2': 176,
        '3': 86,
        '4': 3,
        '5': 96,
        '6': 214,
        '7': 11,
        '8': 96,
        '9': 118,
        '10': 7,
        '11': 176,
        '12': 3,
        '13': 144
      },
      _: {
        '#': {
          '0': 28,
          '1': 132,
          '2': 144,
          '3': 82,
          '4': 8,
          '5': 160,
          '6': 46,
          '7': 8,
          '8': 32,
          '9': 154,
          '10': 7,
          '11': 48,
          '12': 22,
          '13': 130,
          '14': 11,
          '15': 96,
          '16': 160,
          '17': 0
        },
        '>': { textarea: [Object], src: [Object], title: [Object] }
      }
    }
  utf16
    {
      key: 'ᣠ尳䂌ൠ朠堲恓ࣆ)⒴Ւ  ',
      command: 'ᓠ䱅䁼ྀ✣倰悃ӥČ牴☡ɉ坨  ',
      args: { kind: 'ৢ䰹䄬ಀᜧ嬠㨰ȃ㇃⋠⮠盐ӓ䞰  ' },
      src: '᳢ᰲ䄤ۀ樧倽䀩ሢㆡ䰣堡⁗î8堥㋠㢠ᘸèհ඄➚Ɉǐ䞠圠帠⸠氤äȌ硠Ũőۀ怮删 ',
      textarea: '† ',
      title: 'ˢⰵ䂌඀嬣堾性ဠ ',
      _: {
        '#': '๢␴䄴̀䄤格恍ȫば ',
        '>': { textarea: 'ᆡ堫ŘǠ☦〵䓘䕀 ', src: 'ᆡ堫ŘǠ☦〵䓘䕀 ', title: 'ᆡ堫ŘǠ☦〵䓘䕀 ' }
      }
    }
  base64
    {
      key: 'MYFwTgNg1AzgFgSwGYimABKSUCmQ',
      command: 'KYEwlgLg9gTgdAQwMYTFAdnJUTAIIprpA===',
      args: { kind: 'E4UwZghgxgLg9sAdCAHjY0aLAVwHawCWceQA' },
      src: 'OYRwSgggag1A9AdgBJICYwMwDsAKA3AZwAYsArLAcQBYYAZAVQGsid6BFAGwjwFcAvAC4A2AgDEA9nhAApAExDUGAOpA',
      textarea: 'Q===',
      title: 'BYSwVgNg1gtgdgewA5A=',
      _: {
        '#': 'HISQUgigLgggmgcwFoILYKA=',
        '>': {
          textarea: 'IwNgLAnAHATAzAViXEUg',
          src: 'IwNgLAnAHATAzAViXEUg',
          title: 'IwNgLAnAHATAzAViXEUg'
        }
      }
    }
    
```

```javascript
// console.log("*****************************************************")

let decompUri = lzObject.decompress(compressedUri, { output: "uri" });
// console.log(decompUri);
let decompB64 = lzObject.decompress(compressedB64, { output: "base64" });
// console.log(decompB64);
let decompUint8 = lzObject.decompress(compreddUint8, { output: "uint8array" });
// console.log(decompUint8);
let decompUtf16 = lzObject.decompress(compressedUtf16, { output: "utf16" });
// console.log(decompUtf16);

```

### The Decompressed Output

```javascript
   *****************************************************
  DECOMPRESSED
    encoded uri component
      {
        key: 'ctrl+shift+r ctrl+e',
        command: 'editor.action.codeAction',
        args: { kind: 'refactor.extract.function' },
        src: 'gqRAV+/7HHd+3nPvs0njnG4+LUk0PUQlAvuzt6sFovqJ26d3W',
        textarea: '',
        title: 'hijlkmnop',
        _: {
          '#': 'NIJQtAYgZgmg',
          '>': {
            textarea: '1649823555368',
            src: '1649823555368',
            title: '1649823555368'
          }
        }
      }
    base64
    {
      key: 'ctrl+shift+r ctrl+e',
      command: 'editor.action.codeAction',
      args: { kind: 'refactor.extract.function' },
      src: 'gqRAV+/7HHd+3nPvs0njnG4+LUk0PUQlAvuzt6sFovqJ26d3W',
      textarea: '',
      title: 'hijlkmnop',
      _: {
        '#': 'NIJQtAYgZgmg',
        '>': {
          textarea: '1649823555368',
          src: '1649823555368',
          title: '1649823555368'
        }
      }
    }
    uint8array
    {
      key: 'ctrl+shift+r ctrl+e',
      command: 'editor.action.codeAction',
      args: { kind: 'refactor.extract.function' },
      src: 'gqRAV+/7HHd+3nPvs0njnG4+LUk0PUQlAvuzt6sFovqJ26d3W',
      textarea: '',
      title: 'hijlkmnop',
      _: {
        '#': 'NIJQtAYgZgmg',
        '>': {
          textarea: '1649823555368',
          src: '1649823555368',
          title: '1649823555368'
        }
      }
    }
  utf16
    {
      key: 'ctrl+shift+r ctrl+e',
      command: 'editor.action.codeAction',
      args: { kind: 'refactor.extract.function' },
      src: 'gqRAV+/7HHd+3nPvs0njnG4+LUk0PUQlAvuzt6sFovqJ26d3W',
      textarea: '',
      title: 'hijlkmnop',
      _: {
        '#': 'NIJQtAYgZgmg',
        '>': {
          textarea: '1649823555368',
          src: '1649823555368',
          title: '1649823555368'
        }
      }
    }

```
