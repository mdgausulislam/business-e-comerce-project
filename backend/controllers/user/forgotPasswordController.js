const nodemailer = require('nodemailer');
const crypto = require('crypto'); // Import the crypto module
const userModel = require('../../models/userModel');

const { USER_EMAIL, USER_PASSWORD } = process.env; // Destructure environment variables

async function forgotPasswordController(req, res) {
    try {
        const { email } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false
            });
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(20).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; // Token expires in 1 hour

        // Store token in the database
        await userModel.findByIdAndUpdate(user._id, {
            resetToken,
            resetTokenExpiry
        });

        // Send reset password link via email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: USER_EMAIL, // Use destructured environment variables
                pass: USER_PASSWORD
            }
        });

        const mailOptions = {
            from: USER_EMAIL,
            to: email,
            subject: 'Reset Password Link',
            text: `http://localhost:5173/reset_password/${user._id}/${resetToken}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            message: "Reset link sent to your email",
            success: true,
            error: false,
        });

    } catch (err) {
        // Log the error for debugging
        console.error(err);

        // Handle the error and return an appropriate response
        res.status(500).json({
            message: "Failed to send reset link. Please try again later.",
            error: true,
            success: false,
        });
    }
}

module.exports = forgotPasswordController;
