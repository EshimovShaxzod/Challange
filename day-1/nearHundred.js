function nearHundred(n){
  if(100 - n <=10 && n - 100 <=10){
    return true
  }else if(200 - n <=10 && n - 200 <=10){
    return true
  }else{
    return false
  }
}