import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Use useParams to get the reset token from the URL
import SummaryApi from '../common';

function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { token } = useParams(); // Get the reset token from the URL

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.error('Password and confirm password do not match');
            return;
        }

        try {
            const response = await fetch(SummaryApi.resetPassword.url, {
                method: SummaryApi.resetPassword.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ resetToken: token, newPassword: password })
            });
            const data = await response.json();
            if (data.success) {
                console.log(data.message);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="password">New Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ResetPassword;
