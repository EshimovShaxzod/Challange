function delDel(str){
  const strS =  str.split("del")
  if(str.slice(1,4) === "del"){
     return strS.join("")
  }else{
    return str
  }
 
}