function sleepIn(weekday, vacation){
  if(!weekday ||  vacation){
    return true
  }else if(vacation || weekday){
    return false
  }
}