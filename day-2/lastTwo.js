function lastTwo(str){
  return str.slice(0,-2) + str.slice(-2).split("").reverse().join("")
}