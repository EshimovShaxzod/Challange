function extraEnd(str){
  if(str.length >= 2){
     return str.slice(str.length - 2) + str.slice(str.length - 2) + str.slice(str.length - 2)
  }
}