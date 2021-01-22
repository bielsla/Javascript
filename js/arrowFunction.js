var sumOld = function (a, b) {
    return a + b
}

// Arrow functions

var sum = (a, b) => a + b

console.log(sum(3, 5))


var createObj = () => ({ test: 123 })

console.log(createObj())


var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('after 1000ms')
        },
            1000)
    },
    log: function log(value) {
        console.log(value)
    }
}

obj.showContext()