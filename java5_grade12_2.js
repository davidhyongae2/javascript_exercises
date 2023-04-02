
function graph(a){
  //radian
  let c = Math.random(a);
  //formula
  y = -2 * Math.sin(c) -1
  y1 =  2 * Math.cos(c)  
return y,y1
}


//chemistry formula of the day grade 8
for (let element=0; element<=4; element++) {
	// think why starts at 83
	for ( let degree=1; degree<=10;degree++) { 
    	console.log("answer:", graph(degree)*180/3.14);
		}	
    }

