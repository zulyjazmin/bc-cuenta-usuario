import { RequestHandler } from "express";
import { UserWithToken } from "../interfaces/dto-data-transfer-object";

const GetUserIdHandler: RequestHandler = (req, res)=>
{
    const response : UserWithToken = {
        createdAt: new Date(),
        currentToken: {
            expiresOn: new Date(),
            userId: '1',
            token: ""
        },
        username: 'sledesma',
        id: ""
    };
    res.json(response)
}
export default  GetUserIdHandler;