module.exports = function fakeDb() {
    const tables = {
        'oranges' : {
            1: { name: 'Mol', class: 'necromancer'},
            2: { name: 'Gilmar', class: 'warrior'},
            3: { name: 'Claudinho', class: 'archer'},
            4: { name: 'Crefabios', class: 'healer'},
            5: { name: 'Lucca', class: 'ranger'},
            6: { name: 'Max', class: 'witcher'}
        }
    }

    return {
        findInOrangeById : (id) => {
            const person = tables['oranges'][id]
            if(!person) return Promise.reject(`Nao encontrado pro id ${id}`)

            return Promise.resolve(person)
        },
        listAll:() => {
            return Object.values(tables['oranges'])
        }
    }
}