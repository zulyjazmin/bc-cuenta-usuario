import {RequestHandler} from "express";
import { Token, UserBase } from "../interfaces/dto-data-transfer-object";
import TokenService from "../services/TokenService";

interface ITokenController
{
      createToken: RequestHandler<null, Token, UserBase>
}

const TokenController: ITokenController =
{
    createToken: (req, res) =>
    {   
        
        res.json(TokenService.generateToken(req.body.id));
    }
}
export default TokenController;