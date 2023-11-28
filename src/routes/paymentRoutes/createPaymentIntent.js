const express = require('express');
const verifyToken = require('../../middleware/customMiddleare/verifyToken');
const createPaymentIntentRoute = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


createPaymentIntentRoute.post('/create-payment-intent', verifyToken, async (req, res) => {
    try {
        const { price } = await req.body;
        const amount = parseInt(price * 100);
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ['card'],
        });

        res.send({
            clientSecret: paymentIntent.client_secret
        })
    } catch (error) {
        console.error('Payment error :', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = createPaymentIntentRoute;