
function gen(maxLimit = 100){
  const rand = Math.random()*maxLimit; 
  //var rand = Math.random()*maxLimit;
  //let rand = Math.random()*maxLimit;
  return rand;
}
const custom = (process.argv[2]);
//cs note: is this necessary? and explain.
var num = gen(1)
//let num = gen(1)
//const num = gen(1)
console.log("generated percentage:",num,"input percentage:",num*custom);

