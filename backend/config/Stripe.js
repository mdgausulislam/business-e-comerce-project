const Stripe = require("stripe")
const stripe = Stripe(process.env.SECRET_STRIPE_KEY)
module.exports = stripe