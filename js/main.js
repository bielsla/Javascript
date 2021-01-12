/*
var frase = 'Corinthians'
console.log(frase.replace('Corinthians', 'São Paulo')) //Substitui uma palavra pela outra.

var lista = ['banana', 'abacate', 'laranja']
console.log(lista)
console.log(lista[1]) // retorna o indice do array
lista.push('uva') //add item
lista.pop()  //remove item
console.log(lista)
console.log(lista.reverse()) //inverte a lista

console.log(lista.length) //retorna tamanho do array
console.log(lista.toString()) //transforma o array em string
console.log(lista.join(" / ")) //add um separador

var frutas = [{ nome: 'abacate', cor: 'verde' }, { nome: 'banana', cor: 'amarelo' }] // array contendo um dicionario
console.log(frutas)
console.log(frutas[1].nome)

//Recebe a idade do usuário e verifica se menor ou maior de idade
var idade = prompt('Qual sua idade')
if (idade >= 18) {
    alert("maior de idade")
} else {
    alert('menor de idade')
}


var count = 0
while (count < 5) {
    console.log(count)
    count++
}

var contador
for (contador = 0; contador <= 5; contador++) {
    console.log(contador)
}

var d = new Date()
alert(d.getDate() + '/' + d.getMonth() + 1)

function soma(n1, n2) {
    return n1 + n2
}
alert(soma(3, 4))

function validaIdade(idade) {
    if (idade >= 18) {
        var validar = true
    } else {
        validar = false
    }
    return validar
}

var idade = prompt('Qual sua idade')
*/
function botao() {
    //alert('Obrigado')
    document.getElementById('agradecimento').innerHTML = 'Obrigado'
}

function redirecionar() {
    window.open('https://www.youtube.com/')
    //window.location.href = 'https://www.youtube.com/' para abrir na mesma aba
}

function trocar(elemento) {
    elemento.innerHTML = 'Obrigado por passar o mouse'

}

function voltar(elemento) {
    elemento.innerHTML = 'Passe o mouse aqui'
}

function load() {
    alert('Página carregada!')
}

function funcaoChange(elemento) {
    alert(elemento.value)
}