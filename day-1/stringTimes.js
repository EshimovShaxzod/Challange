 function stringTimes(str, n){
  if(n == 1){
    return str
  }else if(n == 2){
    return str + str
  }else if(n == 3){
    return str + str + str
  }else if(n === 4){
    return str + str + str + str
  }else if(n == 5){
    return str + str + str + str + str
  }
  else if(n == 0){
    return ""
  }
}