function endUp(str){
  if(str.length == 2){
    return str.toUpperCase()
  }
 let a = str.slice(0, str.length - 3)
 let b = str.slice(str.length - 3).toUpperCase()
 return a + b
}