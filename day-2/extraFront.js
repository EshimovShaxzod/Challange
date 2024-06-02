function extraFront(str){
  if(str.length >= 2){
    return str.slice(0,2).repeat(3)
  }else{
    return str.slice(0,1).repeat(3)
  }
}