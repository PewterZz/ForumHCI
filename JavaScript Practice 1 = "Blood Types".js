var bloodtype1 = window.prompt('Enter your bloodtype: ')
var bloodtype2 = window.prompt('Enter the receiving bloodtype: ')
if (bloodtype1.charAt(0) == bloodtype2.charAt(0) && bloodtype1.charAt(1) == bloodtype2.charAt(1) ){
  console.log('True, you can safely give your blood')
  alert('True, you can safely give your blood')
}
else if(bloodtype1 == "O-"){
  console.log('True, you can safely give your blood')
  alert('True, you can safely give your blood')
}
else if(bloodtype1 == "O+" && bloodtype2.charAt(1) == "+"){
  console.log('True, you can safely give your blood')
  alert('True, you can safely give your blood')
}
else if(bloodtype2 == "O+" && bloodtype1.charAt(1) == "+"){
  console.log('True, you can safely give your blood')
  alert('True, you can safely give your blood')
}
else if(bloodtype2 == "AB+"){
  console.log('True, you can safely give your blood')
  alert('True, you can safely give your blood')
}
else if(bloodtype2 =="AB-" && bloodtype1.charAt(2) == "-"){
  console.log('True, you can safely give your blood')
  alert('True, you can safely give your blood')
}
else{
  console.log('False, you cannot safely give your blood')
  alert('False, you cannot safely give your blood')
}
