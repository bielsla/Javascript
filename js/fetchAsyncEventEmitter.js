// Async / Await

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Dato')
    }, 1000)
})
const simpleFunc = async () => {
    const data = await asyncTimer()
    return data
}
simpleFunc().then(data => {
    console.log(data)
})

// EventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}
const users = new Users()

users.on('User logged', data => {
    console.log(data)
})
users.userLogged({ user: 'Biel foda' })
users.userLogged({ user: 'Biel maluco' })