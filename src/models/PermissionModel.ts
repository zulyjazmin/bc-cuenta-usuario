import { Schema, model } from "mongoose";



const schema = new Schema( {
    token: String,
    permission_name: String
} );

const PermissionModel = model('Permission', schema, 'permissions');
export default PermissionModel;