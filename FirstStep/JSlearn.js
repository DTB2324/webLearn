var date = new Date()

var day = date.getDate()
var month = date.getMonth() + 1
var year = date.getFullYear()

console.log(`${day}/${month}/${year}`)

console.log(date)

var a = 1

switch(a) {
    case 1:
        console.log('1 nef')
        break
    case 2:
        console.log('2 nef')
        break
    case 9:
        console.log('9 nef')
        break
    default:
        console.log('dontknow')
}