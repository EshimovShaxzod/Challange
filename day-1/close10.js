function close10(a, b){
  if(Math.abs(10 - a) > Math.abs(10 - b)){
    return b
  }else if( a === b){
    return a - b
  }else if(Math.abs(10 - a) == Math.abs(10 - b)){
    return 0
  }else if(Math.abs(10 - a) <= Math.abs(10 - b)){
    return a
  }
}