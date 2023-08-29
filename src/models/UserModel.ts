import { Schema, model } from "mongoose";


const schema = new Schema ( {
    username: String,
    id: String,
    createAt: Date
} );

const UserModel = model('User', schema, 'users');
export default UserModel;