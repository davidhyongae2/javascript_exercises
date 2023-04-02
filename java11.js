
function trapezoid(maxLimit){
  var b = 5;
  var L = 5;
  let rand = 0.5* (b*L) * maxLimit;
  //console.log(rand); //

  rand = Math.floor(rand); // 99

  return rand;
}
var r = 100
console.log(trapezoid(r)); //


function rectangle(maxLimit) {
  var w = 5;
  var l = 5;
  let rand = (w*l) * maxLimit;

  rand = Math.floor(rand);

  return rand;
}

var r = 100
console.log(rectangle(r)); //
