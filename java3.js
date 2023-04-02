
function conversionC(f){
  let c = 5/9*(f-32);
  //rand = float(rand); // 99
  return c;
}

function conversionF(c) {
  let f = (9/5*c)+32
  //rand = float(rand) //99
  return f;
}
//chemistry formula of the day grade 8
for (let element=0; element<=1; element++) {
	// think why starts at 83
	for ( let degree=83; degree<=93;degree++) { 
    	console.log("celsius:",conversionC(degree));
		}	
    }
for (let element=0; element<=1; element++) {
 	// think why start at 23
	for ( let degree=23; degree<=33;degree++) { 
	console.log("fahrenheit:",conversionF(degree));
		}	
    }
