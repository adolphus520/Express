
import { Photo } from "../dao/entity/Photo";
import { DataProvider } from "../dao"
import { Request, Response } from 'express'

export let savePhoto = async (req: Request, res: Response) => {
    const body = req.body
    let photo = new Photo();
    photo.name =  body.name;
    photo.description = body.description;
    photo.filename = body.filename;
    photo.views = body.views;
    photo.isPublished = body.isPublished;
    res.send({data: await DataProvider.PhotoDao.savePhoto(photo)})
}

export let findAllPhoto = async (req: Request, res: Response) => {
    res.send({data: await DataProvider.PhotoDao.findAllPhoto(Photo)})
}

export let findPhotoById = async (req: Request,res: Response) =>{
    const { id } = req.params
    res.send({data: await DataProvider.PhotoDao.getPhotoById(+id)})
}

export let findPhotoByIdWithQuery = async (req: Request,res: Response) =>{
    const id = req.query.id
    res.send({data: await DataProvider.PhotoDao.getPhotoById(Number(id))})
}

export let update = async (req: Request,res: Response) =>{
    const body = req.body
    console.info('body:  ',req.body)
    res.send({data: await DataProvider.PhotoDao.updatePhoto(body)})
}

export let deletePhoto = async (req: Request, res: Response) => {
    const id = req.query.id
    res.send({data: await DataProvider.PhotoDao.delete(Number(id))})
}
