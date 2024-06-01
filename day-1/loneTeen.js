function loneTeen(a, b){
   function isTeen(n) {
    return n >= 13 && n <= 19;
  }

  const aIsTeen = isTeen(a);
  const bIsTeen = isTeen(b);

  return (aIsTeen && !bIsTeen) || (!aIsTeen && bIsTeen);
}