function twoChar(str, index){
  if (index < 0 || index > str.length - 2) {
        index = 0;
    }
    return str.substring(index, index + 2);
}