import { RequestHandler } from "express";
import { MessageResponse } from "../interfaces/dto-data-transfer-object";
import TokenService from "../services/TokenService";
import MessageService from "../services/MessageService";

interface IMessageController
 {
    getMessage: RequestHandler<null, MessageResponse>
}

const MessageController: IMessageController = {
    getMessage: (req, res) =>
    {
      const  xAccessToken = req.headers["x-access-token"];
      const permission ="obtener_mensaje";

      const isValid =TokenService.verifyToken(xAccessToken, permission); 


        if (isValid)
         res.json({
            msj: MessageService.getMessage(),
         });
         else 
         res.json();
    },
};

export default MessageController;