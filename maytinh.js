
// Insert number to display
function insertNum(input) {
  let num = document.querySelector('#display').textContent
  if(num) {
    document.querySelector('#clear-all').textContent = 'C'
  }
  if(num === '0') {
    document.querySelector('#display').textContent = input
  } else {
    document.querySelector('#display').textContent += input
  }
}

// Insert decimal to display
function insertSym() {
  let decimal = document.querySelector('#display').textContent
  if(!decimal.includes('.')) {
    document.querySelector('#display').textContent += '.'
  }
}

// Clear all
function clearAll() {
  let num = document.querySelector('#display').textContent
  if(num) {
    document.querySelector('#display').textContent = 0
    document.querySelector('#clear-all').textContent = 'AC'
  }
}

// Add Plus-Minus sign
function yinYang() {
  let num = document.querySelector('#display').textContent
  if(num) {
    document.querySelector('#display').textContent = num*(-1)
  }
}

// Perent results
function persentButton() {
  let num = document.querySelector('#display').textContent
  if(num) {
    document.querySelector('#display').textContent = num*0.01
  }
}

// Oprerator
let valueStrInMemory = null;
let operatorInMemory = null;

// let getValueAsNum = () => {
//   return insertNum(input)
// }

const regex = /^\d+[+-×÷]\d+$[+-×÷=]/
let regexResult
let result = ''

document.addEventListener('click', e => {
 if (e.target.matches('.orange-button')) {
    const operator = e.target.innerHTML
    let num = document.querySelector('#display').textContent
    if (num) {
      let checkStr = ''
      memoryValueStr = document.querySelector('#display').textContent
      document.querySelector('#display').textContent = 0
      checkStr = memoryValueStr + operator
      result += checkStr
      // console.log(result)
    }
    if(regex.test(result)) {
      console.log('abc')
    }
  }

})


// document.addEventListener('click', e => {
//   if (e.target.matches('.orange-button')) {
//     const operator = e.target.innerHTML
//     let num = document.querySelector('#display').textContent
//       if (num) {
//          currentValueStr = document.querySelector('#display').textContent
//          // document.querySelector('#display').textContent = 0
//          result = currentValueStr + operator
//          result += checkStr
//          console.log(result)
//       }

//   }
// })
    // let newValueNum
    // if (operatorInMemory === 'add') {
    //   newValueNum = parseFloat(num) + parseFloat(currentValueStr)
    // } else if (operatorInMemory === 'subtract') {
    //   newValueNum = parseFloat(num) - parseFloat(currentValueStr)
    // } else if (operatorInMemory === 'multiply') {
    //   newValueNum = parseFloat(num) * parseFloat(currentValueStr)
    // } else if (operatorInMemory === 'divide') {
    //   newValueNum = parseFloat(num) / parseFloat(currentValueStr)
    // }
    //  console.log(document.querySelector('#display').textContent = newValueNum)
  // }

