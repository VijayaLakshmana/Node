// const EventEmiter=require('events')
// const emitter=new EventEmiter()
// emitter.once('start', v => {
//     console.log(`welcome to ${v}`);
//   });
//  emitter.emit('start',"aspire")

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', () => {
  console.log('This listener will be called only once.');
});
emitter.on('start', () => {
  console.log('This listener will be called only twice');
});

const endListener = () => {
  console.log('This listener will be removed later.');
};
emitter.on('end', endListener);


emitter.emit('start');


emitter.emit('end');

emitter.off('end', endListener);

emitter.emit('end');

emitter.removeAllListeners('start');

emitter.emit('start')

