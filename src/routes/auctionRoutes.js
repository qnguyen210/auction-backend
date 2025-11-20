// src/routes/auctionRoutes.js
const express = require('express');
const router = express.Router();

const {
  createAuction,
  listAuctions,
  getAuctionById,
  closeAuction,
} = require('../controllers/auctionController');

const authMiddleware = require('../middleware/authMiddleware');

// Public: list all auctions
router.get('/', listAuctions);

// Public: get one auction
router.get('/:id', getAuctionById);

// Protected: create auction
router.post('/', authMiddleware, createAuction);

// Protected: close auction
router.post('/:id/close', authMiddleware, closeAuction);

module.exports = router;
