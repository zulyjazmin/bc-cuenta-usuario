import { RequestHandler } from "express";
import { DeletedUser } from "../interfaces/dto-data-transfer-object";

const DeletedUserIdHandler: RequestHandler = (req, res)=>
{
    const response : DeletedUser = {
        deletedId: '1',
        deletedUsername: 'sledesma'
        };
    
    res.json(response)
}
export default  DeletedUserIdHandler;