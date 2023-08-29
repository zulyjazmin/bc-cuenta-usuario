import { Schema, model } from "mongoose";



const schema = new Schema( {
    expiresOn: Date,
    token: String,
    userId: String
   
} );

const TokenModel = model('Token', schema, 'tokens');
export default TokenModel;