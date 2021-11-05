const Doggo = require("./doggo-model");
const db = require("../../data/dbConfig")

const goodDoggy = {doggoName:"tuggy"}

beforeAll(async ()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async ()=>{
    await db("doggos").truncate()
})
afterAll(async ()=>{
    await db.destroy()
})

it("do something to ensure tests are running", ()=>{
    expect("").toEqual("")
})

describe("Doggo Model", ()=>{
    describe("insert function",()=>{
        it("add the doggo to the db", async ()=>{
            let all
            await Doggo.create(goodDoggy)
            all = await db("doggos")
            expect(all).toHaveLength(1)
        })
        it("name and id of doggo are returned", async ()=>{
            let res = await Doggo.create(goodDoggy)
            expect(res).toMatchObject({doggoID: 1, doggoName: 'tuggy'})
        })
    })
})