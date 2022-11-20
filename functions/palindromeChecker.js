export default function palindromeChecker(input){
    let patt = new RegExp(/[a-z0-9]+$/)

    let lowerCase = input.toLowerCase()
    
    var linealArray = []
    var invertedArray = []

    for(let i = 0 ; i <= lowerCase.length ; i++){
        let aux = lowerCase[i]
        if(patt.test(aux)){
            invertedArray.unshift(aux)
            linealArray.push(aux)
        }
    }
    
    var inverted = invertedArray.join('')
    var lineal = linealArray.join('')

    if(lineal === inverted) return true
    else return false
}
