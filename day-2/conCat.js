function conCat(a, b){
  
   if(a.slice(-1) == b.slice(0,1)){
     return a.slice(0, a.length - 1) + b
   }
  
  return  a + b

}