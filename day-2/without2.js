function without2(str){
  if(str.length === 1){
    return str
  }else if(str.length === 2){
   return ""
 }else if(str.slice(0,2) === str.slice(-2)){
   return str.slice(2)
 }else{
   return str
 }
}