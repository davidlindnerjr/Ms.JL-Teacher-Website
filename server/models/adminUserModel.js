import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const adminUserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true
})

// Compare hash password with entered password
adminUserSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

// Encrypt password before saving user
adminUserSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const AdminUser = mongoose.model('AdminUser', adminUserSchema);

export default AdminUser;