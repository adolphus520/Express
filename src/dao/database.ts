import "reflect-metadata";
import { createConnection, Connection } from "typeorm";


let defualtConnection:Connection
async function initDatabase(){
    if (!!defualtConnection && defualtConnection.isConnected) {
        return defualtConnection
    }
   const connection = await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "123456",
        database: "express",
        entities: [__dirname + "/entity/*.ts"],
        synchronize: true,
        logging: false,
    })
    defualtConnection = connection
    return defualtConnection
}

async function save(entity:any){
    if (!defualtConnection || !defualtConnection.isConnected) {
        await initDatabase()
    }

    return await defualtConnection.manager.save(entity)
}
async function getAll(entity:any){
    if (!defualtConnection || !defualtConnection.isConnected) {
        await initDatabase()
    }
    return await defualtConnection.manager.find(entity)
}

async function getRepository(entity:any){
    if (!defualtConnection || !defualtConnection.isConnected) {
        await initDatabase()
    }
    return await defualtConnection.getRepository(entity)
}
export {
    initDatabase,
    save,
    getAll,
    getRepository
}