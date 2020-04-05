const {fakeDb, theChosenToDie} = require('lib-do-max')

fakeDb.listAll().then(x => {
    const chosen = theChosenToDie(x.length)
    return fakeDb.findInOrangeById(chosen)
}).then(x => {
    console.log(`The destiny chooos ${x.name} the ${x.class} to DIEEEEE` )
})  