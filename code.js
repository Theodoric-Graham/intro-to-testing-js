// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

const helloWorld = function () {
    return "Hello, World!";
}

const sayHello = function (input) {
    if (typeof input !== 'string') {
        // console.log(input + ': Hello, World!')
        return 'Hello, World!'
    } else {
        // console.log('Hello, ' + input + '!')
        return 'Hello, ' + input + '!'
    }

}

// sayHello(null)
// sayHello('')
// sayHello(2.3)
// sayHello('5')
// sayHello([1, 2, 3])
// var string = 'hello'
// console.log(typeof Number(string), Number(string))

const isFive = function (input) {
    if (input === 5 || +input === 5) {
        return true
    } else {
        return false
    }
}

const isEven = function(input) {
    return input % 2 === 0
}