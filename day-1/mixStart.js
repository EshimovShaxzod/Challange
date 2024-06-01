function mixStart(str){
  if(str.slice(1,4) === "ix" || str.slice(0,3) === "mix" || str.slice(0,3) === "pix" ){
    return true
  }else{
    return false
  }
}