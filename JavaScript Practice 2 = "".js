const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function digitaldecipher(arr,int){
  var zero = 0
  var ark = 0
  var subtractee = String(int)
  while(subtractee.length < arr.length){
    subtractee += String(subtractee.charAt(zero))
    zero += 1
  }
  var codedlist = []
  zero = 0
  for (var i of arr){
    codedlist.push(i - subtractee.charAt(zero))
    zero += 1
  }
  var uncoded = ""
  for (var i of codedlist){
    uncoded += alphabet[i-1]
  }

  return uncoded
}

console.log(digitaldecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990))
