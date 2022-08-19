/*
const {writeFileSync} = require('fs');

for (let i = 0; i < 10000; i++){
	writeFileSync('./content/big.txt', 'hello world'+i+'\n', {flag: 'a'})
}
*/

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf-8'});

stream.on('data', (res) => {
	console.log(res)
})

stream.on('error', (e) => {
	console.log(e)
})