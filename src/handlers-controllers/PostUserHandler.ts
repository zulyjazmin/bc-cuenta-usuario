import { RequestHandler } from "express";
import { UserBase } from "../interfaces/dto-data-transfer-object";

const PostUserHandler: RequestHandler = (req, res)=>
{
    const response : UserBase = {
       createdAt: new Date(),
       id: '1',
       username: 'sledesma'
    };
    res.json(response)
}
export default  PostUserHandler;