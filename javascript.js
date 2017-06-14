
//no. variables
var zero = '0'
var one = '1'
var two = '2'
var three = '3'
var four = '4'
var five = '5'
var six = '6'
var seven = '7'
var eight = '8'
var nine = '9'

var string = ''
var digits = ''
var arr = []
var operator = []
var order = []
var numbers = []
var val = 0
var background = 0

//display function
function display () {
  document.getElementById('log').innerHTML = string
}

//assigning numbers
function zeroFunction () {
  if (string.length < 12) {
      string += zero
      display()
      digits += zero
 }
}
function oneFunction () {
  if (string.length < 12) {
      string += one
      display()
      digits += one
 }
}
function twoFunction () {
  if (string.length < 12) {
      string += two
      display()
      digits += two
 }
}
function threeFunction () {
  if (string.length < 12) {
      string += three
      display()
      digits += three
 }
}
function fourFunction () {
  if (string.length < 12) {
      string += four
      display()
      digits += four
 }
}
function fiveFunction () {
  if (string.length < 12) {
      string += five
      display()
      digits += five
 }
}
function sixFunction () {
  if (string.length < 12) {
      string += six
      display()
      digits += six
 }
}
function sevenFunction () {
  if (string.length < 12) {
      string += seven
      display()
      digits += seven
 }
}
function eightFunction () {
  if (string.length < 12) {
      string += eight
      display()
      digits += eight
 }
}
function nineFunction () {
  if (string.length < 12) {
      string += nine
      display()
      digits += nine
 }
}

//assigning functions
function clearFunction () {
  string = ''
  val = 0
  digits = ''
  arr = []
  operator = []
  numbers = []
  order = []
  display()
}
function clearHistoryFunction () {
  document.getElementById('history').innerHTML = ''
}

function delFunction () {
  if (/\d$/.test(string)) {
    var splitDel2 = digits.split('')
      splitDel2.pop()
      digits = splitDel2.join('')
}else{
  operator.pop()
}
var splitDel = string.split('')
splitDel.pop()
string = splitDel.join('')
  display()
}
function decimalFunction () {
  if (string.length < 12) {
      string += "."
      display()
 }
}
function plusFunction () {
 if (string.length < 12) {
   if (string === '') {
     arr.push(val)
     string += val
   }
  string += '+'
  display()
  if (digits.length > 0) {
      arr.push(Number(digits))
      digits = ''
  }
  operator.push('+')
 }
}
function minusFunction () {
 if (string.length < 12) {
   if (string === '') {
     arr.push(val)
     string += val
   }
  string += '-'
  display()
  if (digits.length > 0) {
      arr.push(Number(digits))
      digits = ''
  }
  operator.push('-')
 }
}
function multiplyFunction () {
 if (string.length < 12) {
   if (string === '') {
     arr.push(val)
     string += val
   }
  string += 'x'
  display()
  if (digits.length > 0) {
      arr.push(Number(digits))
      digits = ''
  }
  operator.push('x')
 }
}
function divideFunction () {
 if (string.length < 12) {
   if (string === '') {
     arr.push(val)
     string += val
   }
  string += '/'
  display();
  if (digits.length > 0) {
      arr.push(Number(digits))
      digits = ''
  }
  operator.push('/')
 }
}

// changing to negative function
function negative () {
    var neg = 0;
    let valStr = digits.charAt(0)
    console.log(digits)
    console.log(valStr)
    let subIndex = string.lastIndexOf(valStr)
    console.log(subIndex)
    let subIndex2 = string.lastIndexOf(valStr) - 2
    let subStr = string.substring(subIndex)
    let subStr2 = string.substring(subIndex2)
    console.log(subIndex)
    console.log(subStr)
if (neg === 0) {
  string = string.slice(subIndex)
    string = string.concat('(-' + subStr + ')')
    display()
    neg = 1
} else {
  string = string.replace(subStr2, subStr)
  display()
  neg = 0
}
  
  val = val * -1

}


function equalsFunction () {
 arr.push(Number(digits))

//calculating multiply and divide
 for (var i = 0; i < arr.length; i++) {
   var j = i + 1
   var h = i - 1
     if (operator[i] === 'x') {
      arr[j] = arr[i] * arr[j]
      if (operator[j] !== 'x' && operator[j] !== '/') {
      numbers.push(arr[j])
    }
  } else if (operator[i] === '/') {
     arr[j] = arr[i] / arr[j]
     if (operator[j] !== 'x' && operator[j] !== '/') {
     numbers.push(arr[j])
    }
  }else {
     order.push(operator[i])
     if (operator[h] !== 'x' && operator[h] !== '/') {
         numbers.push(arr[i])
       }
   }
 }

//calculating plus and minus
val = numbers[0]
for (var n = 0; n < numbers.length; n++) {
  var o = n + 1
  switch (order[n]) {
    case '+': val += numbers[o]
      break
    case '-': val -= numbers[o]
      break
    default:
  }
}

//shortening val
if (val.toString().length > 12) {
    val = val.toPrecision(12)
}

 //display equals values
 document.getElementById('log').innerHTML = val
 document.getElementById('history').innerHTML = string

 //clear
 string = ''
 digits = ''
 arr = []
 operator = []
 numbers = []
 order = []
} //  equalsFunction
