import Dexie from 'dexie';

class Database {
    constructor() {
        let db = new Dexie('financial')

        db.version(1)
            .stores({
                incomeTypes: "++id, &key",
                outcomeTypes: "++id, &key",
            })

        db.on('ready', () => {
            db.incomeTypes.count(count => {
                // no data inserted
                if (count === 0) {
                    db.incomeTypes.bulkAdd([
                        {key: 'incomeTypes.salary'},
                        {key: 'incomeTypes.bonus'},
                        {key: 'incomeTypes.profit'},
                        {key: 'incomeTypes.other'},
                    ])
                }
            })

            db.outcomeTypes.count(count => {
                // no data inserted
                if (count === 0) {
                    db.outcomeTypes.bulkAdd([
                        {key: 'outcomeTypes.food'},
                        {key: 'outcomeTypes.clothes'},
                        {key: 'outcomeTypes.transportation'},
                        {key: 'outcomeTypes.other'},
                    ])
                }
            })
        })

        db.open()

        this.db = db
    }

    getDb() {
        return this.db
    }
}

export default Database