import { RequestHandler } from "express";
import { MessageResponse } from "../interfaces/dto-data-transfer-object";

interface IMessageController
 {
    getMessage: RequestHandler<null, MessageResponse>
}

const MessageController: IMessageController = {
    getMessage: (req, res) =>
    {
         res.json({
            msj: "Mensaje"
         });
    }
};

export default MessageController;