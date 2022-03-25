//Copyright © 2022 david gae some right reserved

function conA(f){
  let c = f/2;
  return c;
}
function conB(f) {
 let d = (2/f)*conA(f);
 return d;
}

function conC(f) {
 let e = conB(f)-conA(f);
 return e;
}

function conE(f) {
 let h = conB(f) *conA(f);
 return h;
}

//formula of the day grade 12
for (let element=0; element<=1; element++) {
	// order of operation, bit challenge. pencil and papers would be best to do this problem. 
	console.log("which is the order of operation :",conE(element),conC(element));
		// eg. (1/10)*(10/1) * [ 10 -3]
		}	
