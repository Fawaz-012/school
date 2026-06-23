import { AppError } from "../utils/app.error.js"


export const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    if(err instanceof AppError){
        return res.status(err.statusCode).json({message: err.message});
    }

    return res.status(500).json({message: `Internal Server Error`});
}