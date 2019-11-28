import mongoose from 'mongoose';

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: { unique: true }
  }
});

const Message = mongoose.model("Message", {
  message: String,
  senderMail: String,
  receiverMail: String,
  timestamp: Number
});

export { User, Message };