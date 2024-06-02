function deFront(str){
  
  if(str.slice(0,1) == 'a' && str.slice(1,2) == 'b'){
     return str
  }else if(str.slice(0,1) == 'a'){
    return str.slice(0,1) + str.slice(2)
  }else if(str.slice(1,2) == 'b'){
    return str.slice(1)
  }
  
   return str.slice(2)
}