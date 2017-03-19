'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

require('../config/db')

let memoSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title is require']
  },
  content: {
    type: String,
    required: [true, 'content is require']
  },
  slug: String
}, {
  timestamps: true
})

let memo = mongoose.model('memo', memoSchema)

module.exports = memo
