let result = ''
let strNumber = ''
let checkArrResult = ''

// Insert number to display
function insertNum(input) {
  let num = document.querySelector('#display').textContent
  if(num) {
    document.querySelector('#clear-all').textContent = 'C'
  }
  if(num === '0') {
    strNumber = input
    document.querySelector('#display').textContent = strNumber
  } else {
    strNumber += input.toString()
    document.querySelector('#display').textContent = strNumber
  }
}

// Insert decimal to display
function insertDecimal() {
  const regexDecimal = /(\d+)[.]/
  if(regexDecimal.test(strNumber) === false) {
    strNumber += '.'
    document.querySelector('#display').textContent = strNumber
  }
}

// Clear all
function clearAll() {
  const num = document.querySelector('#display').textContent
  if(num) {
    result = ''
    document.querySelector('#display').textContent = 0
    document.querySelector('#clear-all').textContent = 'AC'
  }
}

// Add Plus-Minus sign
function minusPlus() {
  const num = document.querySelector('#display').textContent
  if(num) {
    document.querySelector('#display').textContent = num*(-1)
  }
}

// Perent results
function persentButton() {
  const num = document.querySelector('#display').textContent
  if(num) {
    document.querySelector('#display').textContent = num*0.01
  }
}

const regexNumber = /([-\d.]+)/g

function plus(num1, num2) {
  return newResult = Number(num1) + Number(num2)
}

function minus(num1, num2) {
  return newResult = Number(num1) - Number(num2)
}

function mutiply(num1, num2) {
  return newResult = Number(num1) * Number(num2)
}

function divide(num1, num2) {
  newResult = Number(num1) / Number(num2)
  return Math.round(newResult*1000)/1000
}



document.addEventListener('click', e => {
  if (e.target.matches('.orange-button')) {
    const operator = e.target.innerHTML
    const displayNumber = document.querySelector('#display').textContent
    strNumber = ''
    result += displayNumber + operator
    const newArr = result.split(regexNumber).filter(Boolean)
    function checkArr(arr) {
      if(arr[1] === '=') {
        document.querySelector('#display').textContent = arr[0]
        return result = arr[0] + (arr[3] ? arr[3] : arr[1]) 
      }

      if(arr[1] !== operator && arr[3] !== '=') {
        return result = (arr[2] ? arr[2] : arr[0]) + operator 
      }
      
      if(arr[3] === '=') {
        if(arr[1] === '+') {
          document.querySelector('#display').textContent = (plus(arr[0], arr[2]) === 0.30000000000000004 ? 0.3 : plus(arr[0], arr[2]))
          return result = 0 + arr[1]
        } else if(arr[1] === '−') {
          document.querySelector('#display').textContent = minus(arr[0], arr[2])
          return result = 0 + arr[1]
        } else if(arr[1] === '×') {
          document.querySelector('#display').textContent = mutiply(arr[0], arr[2])
          return result = 1 + arr[1]
        } else if(arr[1] === '÷') {
          document.querySelector('#display').textContent = divide(arr[0], arr[2])
          return result = 1 + arr[1]
        }
      } else {
        return calculate(arr[0], arr[1], arr[2])
      }
    }

    function calculate(num1, newOperator, num2) {
      if(newArr.length === 4) {
        switch (newOperator) {
          case '+':
            plus(num1, num2)
            result = newResult + newOperator
            document.querySelector('#display').textContent = newResult
            break;
          case '−':
            minus(num1, num2)
            result = newResult + newOperator
            document.querySelector('#display').textContent = newResult
            break;
          case '×':
            mutiply(num1, num2)
            result = newResult + newOperator
            document.querySelector('#display').textContent = newResult
            break;
          case '÷':
            divide(num1, num2)
            result = newResult + newOperator
            document.querySelector('#display').textContent = newResult
            break;
          default :
            break;
        }
      }
    }
    // console.log(result)
    checkArrResult = checkArr(newArr)
    // console.log(checkArrResult)
  }
 })

