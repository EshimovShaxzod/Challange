function minCat(a, b){
  if(a.length === 0 || b.length ===0 ){
    return ""
  }
  const minLength = Math.min(a.length, b.length);
    const adjustedStr1 = a.slice(-minLength);
    const adjustedStr2 = b.slice(-minLength);
    return adjustedStr1 + adjustedStr2;
}