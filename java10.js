
function triangle(maxLimit){
  var b = 5;
  var L = 5;
  let rand = b*L * maxLimit;
  //console.log(rand); //

  rand = Math.floor(rand); // 99

  return rand;
}
var r = 100
console.log(triangle(r)); //
