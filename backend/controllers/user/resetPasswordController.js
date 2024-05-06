const userModel = require('../../models/userModel');

async function resetPasswordController(req, res) {
    try {
        const { resetToken, newPassword } = req.body;

        const user = await userModel.findOne({
            resetToken,
            resetTokenExpiry: { $gt: Date.now() } // Token should not be expired
        });

        if (!user) {
            throw new Error("Invalid or expired token");
        }

        // Reset password
        user.password = newPassword;
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;
        await user.save();

        res.status(200).json({
            message: "Password reset successfully",
            success: true,
            error: false,
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = resetPasswordController;
