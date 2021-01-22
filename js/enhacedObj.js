function method1() {
    console.log('metodo 1')
}

var teste = 'test'

var obj = {
    method1,
    method2(a, b) {
        return a + b
    },
    [teste + 'concat']: 'prop value'
}

obj.method1()
console.log(obj.method2(3, 4))
console.log(obj)