import {RequestHandler} from "express";

interface IsessionController
{
      createSession: RequestHandler<null, Token>
}

const SessionController: IsessionController =
{
    createSession: (req, res) =>
    {
        res.json({
            userId: '1',
            expiresOn: new Date(),
            token: ''
        })
    }
}
export default SessionController;