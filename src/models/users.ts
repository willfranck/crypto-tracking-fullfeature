import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

  // forgotPasswordToken: String,
  // forgotPasswordTokenExpiration: Date,
  // verifyToken: String,
  // verifyTokenExpiration: Date,
})

const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User
