
import * as photoRouter from './photo.router'
import * as DataBase from "../dao/database"


export default async function routes(app: any) {
    //初始化数据库
    await DataBase.initDatabase()
    //保存Photo
    app.post('/savePhoto', photoRouter.savePhoto)
    //获取全部Photo
    app.get('/findAllPhoto', photoRouter.findAllPhoto)
    //用Id查询Photo
    app.get('/findPhotoById/:id',photoRouter.findPhotoById)
    app.get('/findPhotoByIdWithQuery',photoRouter.findPhotoByIdWithQuery)
    //根据id更新Photo
    app.post('/updatePhoto',photoRouter.update)
    //根据id更新Photo
    app.get('/deletePhoto',photoRouter.deletePhoto)
}
