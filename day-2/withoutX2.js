function withoutX2(str){
  
  if(str.slice(0,2) === "xx"){
     return str.slice(2)
  }else if(str.charAt(0) == 'x'){
    return str.slice(1)
  }else if(str.charAt(1) == 'x'){
     return str.slice(0,1) + str.slice(2,3)
  }else{
    return str
  }
}