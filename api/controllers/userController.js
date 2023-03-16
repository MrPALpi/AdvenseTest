const ApiError = require('../error/ApiError');
const {users} = require('../data.json');
class UserController{
    async auth(req, res, next){
        try{
        const {user, pass} = req.body;
        let access_user={};
        Object.assign(access_user, users.find(user_f => user_f.user==user & user_f.password==pass));
        if(Object.keys(access_user).length !== 0){
        delete access_user.password;
        res.json(access_user);
        }
        else{
            next(ApiError.forbidden('неверный логин или пароль'))
        }
        }catch(e){
            next(new ApiError(401,"Пользователь не существует или введены некорреткные данные"));
        }
    }
    async check(req, res, next){
       const {id} = req.query
       if(!id){
            return next(ApiError.bagReguest('не задан id'))
       }
       res.json(id);
    }
}

module.exports = new UserController