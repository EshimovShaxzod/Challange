function startWord(str, word){
    const frontOfString = str.substring(0, word.length);
    const restOfWord = word.substring(1);
    const restOfFront = frontOfString.substring(1);

    if (restOfWord === restOfFront) {
        return frontOfString;
    } else {
        return "";
    }
}