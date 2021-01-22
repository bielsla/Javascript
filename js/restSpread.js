function sum(a, b) {
    var value = 0

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i]
    }
    return value
}
console.log(sum(5, 5, 10, 5))



function test(...args) {
    return args.reduce((acc, value) => acc + value, 0)
}

console.log(test(5, 3, 10))

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const soma = (a, b, ...rest) => {
    console.log(a, b, rest)
}

soma(5, 5, 10, 6, 4)

const str = 'Vish mano'

function logArgs(...args) {
    console.log(args)
}

logArgs(...str)

const arr = [1, 2, 3]
const arr2 = [5, 3, 6].concat(arr)
const arr3 = [...arr, ...arr2, 7, 8, 0]
console.log(arr2)
console.log(arr3)

const obj = {
    teste: 123
}

const obj2 = {
    teste2: 'hello'
}

console.log(obj2)