function max1020(a, b){
  function inRange(n) {
    return n >= 10 && n <= 20;
  }

  const aInRange = inRange(a);
  const bInRange = inRange(b);

  if (aInRange && bInRange) {
    return a > b ? a : b;
  } else if (aInRange) {
    return a;
  } else if (bInRange) {
    return b;
  } else {
    return 0;
  }
}