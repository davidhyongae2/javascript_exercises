
function num(f){
  let c = (f+3)*(f-3);
  //rand = float(rand); // 99
  return c;
}

function new2(c){
 var d = Math.sqrt(c)
 return d;
}


// why is it NaN
// use a pencil and paper to figure out why?
for (let element=0; element<=3; element++) {
	console.log("num:",num(element));
    	console.log("hypotenuse:",new2(num(element)));
		}	
