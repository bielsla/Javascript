// Symbols

const uniqueId = Symbol('Hello')
const uniqueId2 = Symbol('Hello')
console.log(uniqueId)
console.log(uniqueId === uniqueId2)

const obj = {
    [uniqueId]: 'Hello'
}

console.log(obj)

const arr = [1, 2, 3, 4]

for (let value of arr) {
    console.log(value)
}


const obj2 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0
        return {
            next: () => {
                i++
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

for (let value of obj2) {
    console.log(value)
}

const arr2 = [...obj]

const obj3 = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i]
        }
    }
}

for (let value of obj3) {
    console.log(value)
}