const express = require('express');
const paymentSaveRoute = express.Router();
const verifyToken = require("../../middleware/customMiddleare/verifyToken");
const Payments = require('../../modeles/Payments/Payments');


paymentSaveRoute.post('/payments', verifyToken, async(req, res) => {
    const paymentInfo = await req.body; 
    const payment  = new Payments(paymentInfo);
    const result = await payment.save();
    console.log(result);
    res.send(result)
  });

  module.exports = paymentSaveRoute;