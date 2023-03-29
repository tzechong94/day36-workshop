import Dexie, {Table} from "dexie";
import {City} from "./model/city"

export class AppDB extends Dexie {

    cityList!: Table<City, number>

    constructor() {
        super('cityliveQuery')
        this.version(1).stores({
            cityList: '++id'
        })
        this.on('populate', ()=>this.populate())
    }

    async populate() {
        await db.cityList.bulkAdd([
            { country: 'Singapore', city: 'Singapore', imageUrl: 'hi'},
            { country: 'United Kingdom', city: 'London', imageUrl: 'hi'},
            { country: 'Malaysia', city: 'Kuala Lumpur', imageUrl: 'hi'},
            { country: 'China', city: 'Beijing', imageUrl: 'hi'},
            { country: 'India', city: 'New Delhi', imageUrl: 'hi'},
        ])
        
    }


}

export const db = new AppDB()

