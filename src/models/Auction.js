const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema(
  {
    title:         { type: String, required: true },
    description:   { type: String },
    startingPrice: { type: Number, required: true },
    currentPrice:  { type: Number, default: null },
    seller:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    endTime:       { type: Date, required: true },
    status:        { type: String, default: 'OPEN' } // OPEN, CLOSED, CANCELLED
  },
  { timestamps: true }
);

module.exports = mongoose.model('Auction', auctionSchema);
