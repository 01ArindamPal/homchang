import React from 'react';

import './admin_login.css';

const admin_login = () =>{
    return(
        <div className="login-container">
            <div className="login-box">

                <h2>Welcome back Admin</h2>
                <p>Please enter your Login details !</p>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Enter Password" required />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>

            
        </div>
    );
};

export default admin_login;