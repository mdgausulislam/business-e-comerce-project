const stripe = require('../../config/Stripe')
const userModel = require("../../models/userModel");

const paymentController = async (req, res) => {

    try {
        const { cartItems } = req.body;

        console.log("cartitems payment", cartItems);
        const user = await userModel.findOne({ _id: req.userId })
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],  // Corrected parameter
            billing_address_collection: 'auto',  // Corrected parameter
            shipping_options: [
                {
                    shipping_rate: 'shr_1PO0UyKN3cpuN2ubbbkeBJju'
                }
            ],
            customer_email: user.email,
            metadata: {
                userId: req.userId
            },
            line_items: cartItems.map((item, index) => {
                return {
                    price_data: {
                        currency: "usd",  // Changed currency to match shipping rate
                        product_data: {
                            name: item.productId.productName,
                            images: item.productId.productImage,
                            metadata: {
                                productId: item.productId._id
                            }
                        },
                        unit_amount: item.productId.sellingPrice * 100
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1
                    },
                    quantity: item.quantity
                }

            }),
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        }

        const session = await stripe.checkout.sessions.create(params)
        res.status(303).json(session)

    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = paymentController