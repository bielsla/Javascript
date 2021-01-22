//Promises

const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            //did something
            resolve('First data')
        }, 1000)
    })

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            //did something
            resolve('Second data')
        }, 1000)
    })

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''))
    console.log(data[1].split(''))
})

/*
doSomethingPromise()
    .then(data => { console.log(data.split('')); return doOtherThingPromise() })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error))
*/


/*
//Callback
function something(callback) {
    setTimeout(function () {
        //something
        callback('First data')
    }, 1000)
}

function thing(callback) {
    setTimeout(function () {
        //thing
        callback('Second data')
    }, 1000)
}

function doAll() {
    try {
        something(function (data) {
            var processedData = data.split('')

            try {
                thing(function (data2) {
                    var processedData2 = data2.split('')
                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2)
                        }, 1000)
                    } catch (err) {
                        // error
                    }
                })
            } catch (err) {
                //error
            }
        })
    } catch (err) {
        //erro
    }
}

doAll()
*/