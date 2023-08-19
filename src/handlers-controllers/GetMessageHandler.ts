import { RequestHandler } from "express";
import {  MessageResponse } from "../interfaces/dto-data-transfer-object";
import { ShowMessage, VerifyToken } from "../services";

const GetMessageHandler: RequestHandler = (req, res)=>
{

    //TODO
    /* req.headers['x-access-token']
    const token: Token = {

    }
    if(VerifyToken(token, 'ShowMessage'))
    {
        res.json(ShowMessage())
    }
    else{
        res.status(403).json({
            error: 'Unauthorized'
        })
    } */
}
export default   GetMessageHandler;