var arr = ['Maça', 'Banana', 'Abacate']

var [apple, banana2, [tomate2]] = ['Maça', 'Banana', ['Tomate']]

console.log(tomate2)

var obj = {
    name: 'Biel',
    prop: {
        colors: ['azul', 'verde']
    }
}

var { name: nome,
    prop: {
        colors: [blue, green]
    }
} = obj

console.log(nome)
console.log(green)

function soma([a, b] = [1, 1]) {
    return a + b
}

