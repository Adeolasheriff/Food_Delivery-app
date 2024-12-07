const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },

    email: { 
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Invalid email'],
    },
    password: { 
        type: String,
        required: true,
        minlength: 6,
        select: false,
    },
    passwordConfirm:{
        type: String,
        required: true,
        minlength: 6,
        select: false,
        validate: {
            validator: function(value) {
                return value === this.password
            },
            message: 'Passwords do not match'
        }
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    profileImage:{
        type: String,
        required: true,
    }
},
{
   timestamps:true
}
)

module.exports = mongoose.model('User', UserSchema)