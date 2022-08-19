const {readFile, writeFile} = require('fs').promises;

//const util = require('util');

//const readFile = util.promisify(readFile)
//const writeFile = util.promisify(writeFile)


const start = async () => {
	try{
	const first = await readFile('./content/first.txt', 'utf-8');
	const second = await readFile('./content/second.txt', 'utf-8');
	await writeFile('./content/Promisificando.txt', 'You are the best!', {flag: 'a'});
	console.log(first, second)
	}catch(e){
	console.log(e);
	}	
}

start();

/*
const first = res;
	
	readFile('./content/second.txt', 'utf8', (err, res) => {
	
	if(err){
	console.log(err) 
	return;
	}
	const second = res;
	
	writeFile('./content/result-async.txt', 'Hola mundo', (err, res) => {
	if (err) return;
	console.log(res)
	})
	})
*/