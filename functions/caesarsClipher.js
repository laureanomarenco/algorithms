export default function caesarsClipher(str){
  if (typeof str !== "string") throw new Error("The argument is not a string")
  let patt = new RegExp(/[A-Z]+$/)
  
  let string = str.toUpperCase()
  let decode = ''

  for(let i = 0 ; i < string.length; i++){
    let initialCharCode = string.charCodeAt(i)
    if(patt.test(string[i])){
        if(initialCharCode + 13 > 90){
            let aux = initialCharCode + 13 - 90 + 64
            decode = decode + String.fromCharCode(aux)
        } else {
          let aux = initialCharCode + 13
          decode = decode + String.fromCharCode(aux)
        }
    } else decode = decode + string[i]
  }

  return decode
}