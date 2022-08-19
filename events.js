const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('salchi', (name, id) =>{
	console.log('Hola xyx' + name + id)
})

customEmitter.on('salchi', () =>{
	console.log('Hola Salchi!')
})

customEmitter.emit('salchi', 'pablo', 35);







