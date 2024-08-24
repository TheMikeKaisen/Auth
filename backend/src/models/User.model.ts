import mongoose, { Document, Schema } from "mongoose";
import  bcrypt  from "bcryptjs";
interface UserSchemaTypes extends Document {
    username: string, 
    email: string,
    password: string,
    fullname: string, 
    comparePassword(inputPassword: string): Promise<boolean>;
}

const UserSchema = new Schema({
    username: {
        type: String, 
        unique: true, 
        required: [true, "username is required"], 
        trim: true,
        lowercase: true 
    }, 
    email: {
        type: String, 
        unique: true, 
        required: [true, "email is required"], 
        trim: true, 
        lowercase: true
    }, 
    password: {
        type: String, 
        required: [true, 'password is required']
    }, 
    fullname: {
        type: String, 
        required: [true, "full name is required"]
    }

}, {timestamps: true})


// to hash the password at the time of saving it
UserSchema.pre<UserSchemaTypes>('save', async function (next) {
    if(!this.isModified('password')){
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

UserSchema.methods.comparePassword = async function(inputPassword: string): Promise<boolean>{
    return await bcrypt.compare(inputPassword, this.password);
}


export const User = mongoose.model<UserSchemaTypes>("User", UserSchema);
