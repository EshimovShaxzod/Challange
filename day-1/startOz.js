function startOz(str){
  if(str.slice(0,2) === "oz"){
    return str.slice(0,2)
  }else if(str.slice(0,1) === "o"){
    return str.slice(0,1)
  }else if(str.slice(1,2) === "z"){
    return str.slice(1,2)
  }else{
     return ""
  }
}