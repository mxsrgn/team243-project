const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  dayOfWeek: { //user inputs specific day for todo item to be listed under
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
