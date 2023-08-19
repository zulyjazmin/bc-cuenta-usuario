import { MessageResponse, Token} from "../interfaces/dto-data-transfer-object";



const ShowMessage = (): MessageResponse =>
{
    
    return {
           msj: "Hola mundo"
    }
}

export default ShowMessage ;