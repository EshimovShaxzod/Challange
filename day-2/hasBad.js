function hasBad(str){
  if(str.slice(0,3) === 'bad' || str.slice(1,4) === 'bad' ){
    return true
}else{
    return false
}