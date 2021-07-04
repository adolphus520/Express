import { createConnection, Connection, Entity } from "typeorm";
import { DataProvider } from "./index"
import {Photo} from "./entity/Photo"

export const PhotoDao = {
    getPhotoById: async (id: number) =>{
        const getRepository =  await DataProvider.DataBase.getRepository(Photo)
        return await getRepository.find({id:id})
    },
    savePhoto: async (entity:any) => {
       return await DataProvider.DataBase.save(entity)
    },
    findAllPhoto: async(entity:any) =>{
        return await DataProvider.DataBase.getAll(entity)
    },
    updatePhoto:async (entity:any) => {
        const getRepository =  await DataProvider.DataBase.getRepository(Photo)
        let photo = await getRepository.findOne({id:entity.id}) as Photo
        photo.name = entity.name
        return await getRepository.save(photo)
    },
    delete:async(id:number) => {
        const getRepository = await DataProvider.DataBase.getRepository(Photo)
        const photo = await getRepository.findOne({id:id}) as Photo
        return await getRepository.remove(photo)
    }
}