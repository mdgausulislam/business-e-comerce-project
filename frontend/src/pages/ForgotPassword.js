import React from 'react'

function ForgotPassword() {
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Enter Your NEW Password</h1>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="password">New password</label>
                            <input type="password" name="password" id="password" placeholder='Enter Your new password' />
                        </div>

                        <button className='btn'>Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword