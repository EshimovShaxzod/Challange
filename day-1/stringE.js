function stringE(str){
  const aS = str.split("")
  const sum = 0;
  aS.forEach((i) => {
    if(i === "e"){
      sum += 1
    }
  })
//   return sum
  if(sum == 1 || sum == 3){
    return true
  }else{
    return false
  }
}