
function generateRandom(maxLimit = 100){
  let rand = Math.random() * maxLimit;
  //onsole.log(rand); //

  rand = Math.floor(rand); // 99

  return rand;
}
//generateRandom(10);

for (let element=0; element<10000; element++) {
    if ( generateRandom(10) == Number.Max_Value )
		console.log(generateRandom(10)); //

    }


