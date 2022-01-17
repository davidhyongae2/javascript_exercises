function generateRandom(maxLimit = 100){
  let rand = Math.random() * maxLimit;
  console.log(rand); //

  rand = Math.floor(rand); // 99

  return rand;
}
generateRandom(10);

for (let element=0; element<10; element++) {
    if (element*2 -1 < generateRandom(10))
        console.log("odd:", generateRandom(10));
    else if (element -1 < generateRandom(10))
        console.log("even:",generateRandom(10));
    else if (element*2 -1 > generateRandom(10))
        console.log("odd:", generateRandom(10));
    else if (element -1 > generateRandom(10))
        console.log("even:",generateRandom(10));
    }


//how you make it add odds?
for (let element=0; element<10; element++) {

    }
//how you make it all even?
for (let element=0; element<10; element++) {

    }


