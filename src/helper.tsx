import { Conversion } from './interfaces'

const conversion: Conversion = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

export const romanToInt = (value: string) => {
  if (typeof value !== 'string') throw new Error('wrong value')
  const arr = value.toUpperCase().split('')

  let total = 0
  
  for(let i = 0; i < arr.length; i++){
    const currentValue = conversion[arr[i]];
    const nextValue = conversion[arr[i+1]]

    if (currentValue < nextValue) {
      total -= currentValue
    } else {
      total += currentValue
    }
  }
  return total
}

export const intToRoman = (value: number) => {
  var result = '';

  for (var i of Object.keys(conversion)) {
    var q = Math.floor(value / conversion[i]);
    value -= q * conversion[i];
    result += i.repeat(q);
  }

  return result;
}
