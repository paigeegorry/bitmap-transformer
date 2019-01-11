const Buffer = require('buffer').Buffer;

const buf = Buffer.alloc(10, 'abcdef');

const b = Buffer.from('banana');

console.log(buf.toString());
console.log(b.toString());

// console.log(b.map(byte => {
//   return 104;
// }).toString());

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);

console.log(smile.toString());
