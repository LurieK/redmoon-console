const express = require('express');
const app = express();
const port = 3001;
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server is running.');
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.post('/create-payment-intent', async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000, // amount in cents
        currency: 'usd',
      });
      res.status(200).send(paymentIntent.client_secret);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  