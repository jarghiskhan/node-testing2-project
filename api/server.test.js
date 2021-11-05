const request = require("supertest")
const server = require('../api/server');
const db = require("../data/dbConfig");


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

describe("doggo-router tests", ()=>{
    describe("[POST] /doggos", () =>{
        test('[1] creates a new doggo in the database', async () => {
            await request(server).post('/api/doggos').send({ doggoName: 'nugg' })
            let doggos = await db('doggos')
            expect(doggos).toHaveLength(1)
            await request(server).post('/api/doggos').send({ doggoName: 'tugg' })
            doggos = await db('doggos')
            expect(doggos).toHaveLength(2)
          }, 750)
          test('[2] responds with a 400 if name is too long', async () => {
            let res = await request(server).post('/api/doggos').send({ doggoName: 'thisnameistoolongbyafewcharacterswowsomany' })
            expect(res.status).toBe(400)
          }, 750)
    })
    describe("[Delete] /doggos", () =>{
        test('[3] deletes the doggo and returns a 202', async () => {
            await request(server).post('/api/doggos').send({ doggoName: 'nugg' })
            let res = await request(server).delete('/api/doggos').send({ doggoName: 'nugg' })
            expect(res.status).toBe
          }, 750)
          test('[4] responds with a 400 if name is not found', async () => {
            await request(server).post('/api/doggos').send({ doggoName: 'nugg' })
            let res = await request(server).delete('/api/doggos').send({ doggoName: 'sloops' })
            expect(res.status).toBe(400)
          }, 750)
    })
})
