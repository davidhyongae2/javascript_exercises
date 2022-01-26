function graph(a){
  //radian
  let c = Math.random(a);
  //formula
  y = -2 * Math.sin(c) -1
  return y;
}


//chemistry formula of the day grade 12
for (let element=0; element<=4; element++) {
	for ( let degree=1; degree<=10;degree++) { 
    	console.log("answer:", graph(degree));
		}	
    }

