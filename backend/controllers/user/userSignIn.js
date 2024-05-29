const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModel');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const secretToken = "24079d10374ffeefe43a27019e0f5ed5bc09c273c71b342b13f391fb5dd096e92651ee7fc60b61a6418a9e0ca3a4d784";

        const { email, password } = req.body;

        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        console.log("checkPassword", checkPassword);

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            };
            const token = await jwt.sign(tokenData, secretToken, { expiresIn: 60 * 60 * 8 });

            // Sending the token to the client-side for storage in localStorage
            res.status(200).json({
                message: "Login successfully",
                data: {
                    token: token
                },
                success: true,
                error: false
            });

        } else {
            throw new Error("Please check Password");
        }

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController;
