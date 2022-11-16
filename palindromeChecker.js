export default function palindromeChecker(input){
    if(typeof input !== 'string') throw new Error('The argument passed is not a string')
    let lowerCase = input.toLowerCase()
    var invertedArray = []
    
    for(let i = lowerCase.length-1 ; i >= 0 ; i--){
        let aux = lowerCase[i]
        invertedArray.push(aux)
    }

    var inverted = invertedArray.join('')

    if(lowerCase === inverted) return true
    else return false
}