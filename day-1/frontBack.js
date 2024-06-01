function frontBack(str){
  if(str.length == 1){
    return str
  }else{
    const firstChar = str.slice(0,1)
    const lastChar = str.slice(str.length - 1)
    const strSlice = str.slice(1, -1)
    return lastChar + strSlice + firstChar
  }
}