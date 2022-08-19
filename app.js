/*
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');

const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second)

writeFileSync('./content/result-sync.txt', 'Here is the PABLO', {flag: 'a'})
*/

/*
const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, res) => {
	if(err){
	 console.log(err)
	 return;
	}
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
})

*/

const http = require('http');

const server = http.createServer((req, res) => {
	if(req.url === '/'){
		res.end('Hello mundo a mi pagina')
	}if(req.url === '/about'){
		res.end('About page')
	}else{
		res.end('<h1>Oops! no existe la pagina</h1>')
	}
})

server.listen(5000);




