import mongoose from 'mongoose'

const VisitorSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
})

// Ensure we only have one document for visitor count
VisitorSchema.index({}, { unique: true })

export default mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema) 