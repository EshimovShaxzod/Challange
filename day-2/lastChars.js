function lastChars(a, b){
  if(a.length === 0 && b.length === 0){
    return "@" + "@"
  }else if(b.length === 0){
    return a.slice(0,1) + '@'
  }else if(a.length === 0){
    return '@' + b.slice(-1)
  }
  return a.slice(0,1) + b.slice(-1)
  
}
