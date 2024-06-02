function seeColor(str){
  if(str.slice(0,3) == 'red'){
    return str.slice(0,3)
  }else if(str.slice(0,4) == 'blue'){
    return str.slice(0,4)
  }else{
    return ''
  }
}