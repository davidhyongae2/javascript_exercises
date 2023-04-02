// fibonacci recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
//readline then run function.
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('input ');
rl.prompt();
rl.on('line', (number) => {
    if(number <=0) {
    	console.log('Enter a positive integer.');
	}
	else 
        {
    	for(let i = 0; i < number; i++) {
        	console.log(fibonacci(i));
		rl.close();
    		}
	}
})
