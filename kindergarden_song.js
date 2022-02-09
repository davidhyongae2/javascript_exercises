var sortAlphabets = function(text) {
    return text.split('').sort().join('');
};

var sortvowel = function(text) {
    //const num2 = "abcywgoyw"  
    let new1 = {} 
    for ( let i = 0; i < text.length; i++) {
	     for ( const j in text) {
	   	if ( text[j] == 'a' || text[j] == 'e' || text[j] == 'i' || text[j] == 'o' || text[j] == 'u' || text[j] == 'y' || text[j] == 'w') {
			new1[text[j]] = text[j]
			//console.log(new1)
				}	
	   		}
		}
   return new1
	}
var sortcons = function(text) {
    let new1 = {}
    for ( let i = 0; i < text.length; i++) {
    	for (const j in text) {
	   if( text[j] == 'b') {
		new1[text[j]] = text[j]
	   	}	
	  //continue as your excerise. 	
	}
   }
  return new1
}

console.log(nums="abcdefghijkmnopqrstuvwxyz");
//children song
console.log("a b c song:",sortAlphabets(nums));
console.log("vowel song:",sortvowel(nums));
console.log("consonant song:",sortcons(nums));


