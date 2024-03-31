const EventEmitter = require('./module');
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (name) => {
  console.log(`Welcome, ${name}!`);
});

eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

eventEmitter.emit('greet', 'ahmed');
