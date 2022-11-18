export default function romanNumConverter(num) {
  if (typeof num !== "number") throw new Error("The argument is not a number");
  if (num > 3999)
    throw new Error("Sorry, only can convert numbers minors of 4000");

  let roman = "";

  let stringNums = num.toString().split("");
  let nums = stringNums.map((n) => Number.parseInt(n));

  const itsFourOrNine = (n) => {
    if (n == 4 || n == 9) return true;
    else return false;
  };

  let romanCharacter = [
    {
      unity: "I",
      nine: "IX",
      five: "V",
      four: "IV",
    },
    {
      unity: "X",
      nine: "XC",
      five: "L",
      four: "XL",
    },
    {
      unity: "C",
      nine: "CM",
      five: "D",
      four: "CD",
    },
    {
      unity: "M",
    },
  ];

  let chars = nums.length - 1;
  for (let j = 0; j <= nums.length - 1; j++) {
    if (nums[j] < 5) {
      if (itsFourOrNine(nums[j])) roman = roman + romanCharacter[chars].four;
      else {
        for (let i = 0; i < nums[j]; i++) {
          roman = roman + romanCharacter[chars].unity;
        }
      }
    } else {
      if (itsFourOrNine(nums[j])) roman = roman + romanCharacter[chars].nine;
      else {
        let aux = romanCharacter[chars].five;
        for (let i = 5; i < nums[j]; i++) {
          if (nums[j] === 5) return;
          else {
            aux = aux + romanCharacter[chars].unity;
          }
        }
        roman = roman + aux;
      }
    }
    chars = chars - 1;
  }

  return roman;
}
