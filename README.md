# lz-object - lzObj - compress the size of object properties and values



```javascript
import { lzObj } from "./src";



let compressedUri = lzObj.compress(dummyObject, { output: "uri" });
// console.group("COMPRESSED")
// console.group("encoded uri component")
// console.log(compressedUri)
// console.groupEnd()
let compreddUint8 = lzObj.compress(dummyObject, { output: "uint8array" });
// console.group("uint8array indexed into object")
// console.log(compreddUint8)
// console.groupEnd()
// console.group("utf16")
let compressedUtf16 = lzObj.compress(dummyObject, { output: "utf16" });
// console.log(compressedUtf16)
// console.groupEnd()
// console.group("base64")
let compressedB64 = lzObj.compress(dummyObject, { output: "base64" });
// console.log(compressedB64)
// console.groupEnd()

```


```javascript
COMPRESSED
  encoded uri component
    {
      NYUwnkA: 'MYFwTgNg1AzgFgSwGYimABKSUCmQ',
      MYewtmCGB2AmQ: 'KYEwlgLg9gTgdAQwMYTFAdnJUTAIIprpA',
      IYJw5gzkA: { NYSwdgJkA: 'E4UwZghgxgLg9sAdCAHjY0aLAVwHawCWceQA' },
      M4JwxkA: 'OYRwSgggag1A9AdgBJICYwMwDsAKA3AZwAYsArLAcQBYYAZAVQGsid6BFAGwjwFcAvAC4A2AgDEA9nhAApAExDUGAOpA',
      C4UwHsCGBOKUA: 'Q',
      C4S2BsFMg: 'BYSwVgNg1gtgdgewA5A',
      PpA: {
        MRA: 'HISQUgigLgggmgcwFoILYKA',
        HxA: {
          C4UwHsCGBOKUA: 'IwNgLAnAHATAzAViXEUg',
          M4JwxkA: 'IwNgLAnAHATAzAViXEUg',
          C4S2BsFMg: 'IwNgLAnAHATAzAViXEUg'
        }
      }
    }
  uint8array indexed into object
    {
      '᫢䱇䠠 ': {
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
      'ᣣ汍䰰悖Œ  ': {
        '᫢ⰽ䁬䀠 ': {
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
      '᧡᱑䠠 ': {
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
      'ע䰧堰恮ᓀ ': { '0': 64, '1': 0 },
      'עⶡ塉䠠 ': { 'ᢨ ': { 'ע䰧堰恮ᓀ ': [Object], '᧡᱑䠠 ': [Object], 'עⶡ塉䠠 ': [Object] } }
    }
  utf16
    {
      '᫢䱇䠠 ': 'ᣠ尳䂌ൠ朠堲恓ࣆ)⒴Ւ  ',
      'ᣣ汍䰰悖Œ  ': 'ᓠ䱅䁼ྀ✣倰悃ӥČ牴☡ɉ坨  ',
      'ს᱙䆼䀠 ': { '᫢ⰽ䁬䀠 ': 'ৢ䰹䄬ಀᜧ嬠㨰ȃ㇃⋠⮠盐ӓ䞰  ' },
      '᧡᱑䠠 ': '᳢ᰲ䄤ۀ樧倽䀩ሢㆡ䰣堡⁗î8堥㋠㢠ᘸèհ඄➚Ɉǐ䞠圠帠⸠氤äȌ硠Ũőۀ怮删 ',
      'ע䰧堰恮ᓀ ': '† ',
      'עⶡ塉䠠 ': 'ˢⰵ䂌඀嬣堾性ဠ ',
      'Ὠ ': {
        'ᢨ ': '๢␴䄴̀䄤格恍ȫば ',
        'ྨ ': {
          'ע䰧堰恮ᓀ ': 'ᆡ堫ŘǠ☦〵䓘䕀 ',
          '᧡᱑䠠 ': 'ᆡ堫ŘǠ☦〵䓘䕀 ',
          'עⶡ塉䠠 ': 'ᆡ堫ŘǠ☦〵䓘䕀 '
        }
      }
    }
  base64
    {
      'NYUwnkA=': 'MYFwTgNg1AzgFgSwGYimABKSUCmQ',
      'MYewtmCGB2AmQ===': 'KYEwlgLg9gTgdAQwMYTFAdnJUTAIIprpA===',
      'IYJw5gzkA===': { 'NYSwdgJkA===': 'E4UwZghgxgLg9sAdCAHjY0aLAVwHawCWceQA' },
      'M4JwxkA=': 'OYRwSgggag1A9AdgBJICYwMwDsAKA3AZwAYsArLAcQBYYAZAVQGsid6BFAGwjwFcAvAC4A2AgDEA9nhAApAExDUGAOpA',
      'C4UwHsCGBOKUA===': 'Q===',
      'C4S2BsFMg===': 'BYSwVgNg1gtgdgewA5A=',
      'PpA=': {
        'MRA=': 'HISQUgigLgggmgcwFoILYKA=',
        'HxA=': {
          'C4UwHsCGBOKUA===': 'IwNgLAnAHATAzAViXEUg',
          'M4JwxkA=': 'IwNgLAnAHATAzAViXEUg',
          'C4S2BsFMg===': 'IwNgLAnAHATAzAViXEUg'
        }
      }
    }
    
```

```javascript
// console.log("*****************************************************")
// console.group("DECOMPRESSED")
// console.group("encoded uri component")
let decompUri = lzObj.decompress(compressedUri, { output: "uri" });
// console.log(decompUri);
// console.groupEnd()
// console.group("base64")
let decompB64 = lzObj.decompress(compressedB64, { output: "base64" });
// console.groupEnd()
// console.log(decompB64);
// console.group("uint8array")
let decompUint8 = lzObj.decompress(compreddUint8, { output: "uint8array" });
// console.groupEnd()
// console.log(decompUint8);
// console.groupEnd()
// console.group("utf16")
let decompUtf16 = lzObj.decompress(compressedUtf16, { output: "utf16" });
// console.log(decompUtf16);
// console.groupEnd()

```

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
      key: { kind: 'refactor.extract.function' },
      src: 'gqRAV+/7HHd+3nPvs0njnG4+LUk0PUQlAvuzt6sFovqJ26d3W',
      textarea: {
        undefined: {
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