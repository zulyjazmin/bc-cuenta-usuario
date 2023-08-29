import {RequestHandler} from "express";
import TokenService from "../services/TokenService";
import { Token, User } from "../interfaces";

interface ITokenController
{
      createToken: RequestHandler<null, Token, User>
}

const TokenController: ITokenController =
{
    createToken: (req, res) =>
    {   
        
        res.json(TokenService.generateToken(req.body.id));
    }
}
export default TokenController;