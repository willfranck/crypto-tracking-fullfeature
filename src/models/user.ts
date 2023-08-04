import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Provide your username'],
    unique: true
  },

  password: {
    type: String,
    required: [true, 'Enter your password']
  },

  email: {
    type: String,
    required: [true, 'Provide your email'],
    unique: true
  },
  
  isVerified: {
    type: Boolean,
    default: false
  },
  
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date
})

const User = mongoose.models.users || mongoose.model('User', userSchema)

export default User
