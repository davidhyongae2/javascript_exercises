//Copyright © 2022 david gae all right reserved

//right distance
function obja(a){
  let c = 1/a
  return c;
}

//left distance
function objb(a){
  let d = ((1/a) -2)
  return d;
}


for (let ele = 0; ele<=4; ele++) {
	d2 = obja(ele)
	d1 = objb(ele) 
	}

console.log("stero pair",d1,d2);
	
