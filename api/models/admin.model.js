import mongoose from 'mongoose';
const adminSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        mobile:{
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
            unique:true
        },
        avatar:{
            type: String,
            default: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        },
    },
    {timestamps:true}
);

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;