function frontTimes(str, n){
  let newStr = ''
  for(let i = 0; i < n; i++){
    newStr += str.slice(0, 3)
  }
  return newStr
}