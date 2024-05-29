const addToCartModel = require("../../models/cartProduct");

const addToCartController = async (req, res) => {
    try {
        const { productId } = req?.body;
        const currentUser = req.userId;

        // Check if the product exists in the cart of the current user
        const isProductInUserCart = await addToCartModel.findOne({ productId, userId: currentUser });

        if (isProductInUserCart) {
            return res.json({
                message: "Product already exists in the cart",
                success: false,
                error: true
            });
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser,
        };

        const newAddToCart = new addToCartModel(payload);
        const saveProduct = await newAddToCart.save();

        return res.json({
            data: saveProduct,
            message: "Product added to cart",
            success: true,
            error: false
        });

    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = addToCartController;
