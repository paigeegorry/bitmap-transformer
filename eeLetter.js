const EventEmitter = require('events');
const ee = new EventEmitter();

ee.on('letter', data => {
  console.log(data);
});

const data = 'abcde'.split('');

data.forEach(l => {
  ee.emit('letter', l);
});
