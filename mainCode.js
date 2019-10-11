exports.findNextSquare = (number) => {
    let answer = Math.sqrt(number)
    if((answer%1) == 0){
      let finalAnswer = (answer + 1) * (answer + 1)
      return finalAnswer
    }
    return -1
}