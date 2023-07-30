import React, { useState } from 'react';
import logo from '../img/Group.png'

const Login = () => {
    // State variables to store login credentials and error messages
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if username and password are not empty
        if (!credentials.username || !credentials.password) {
            setError('Please enter both username and password.');
            return;
        }

        try {
            // Perform login API call
            const response = await fetch('https://host:port/ibmmq/rest/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (response.ok) {
                setError('');
                alert('Login successful!'); // Replace this with your desired success action
            } else {
                setError('Invalid username or password.'); // Display a generic error message for simplicity
            }
        } catch (error) {
            setError('An error occurred. Please try again later.'); // Display a generic error message for any API call issues
        }

    };

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,

            [name]: value,
        }));

    };

    return (
        <>
            <header className='header_topper'>
                <div className='header_container'>
                    <span className='footer_line'>
                        <img src={logo} alt="#" />
                    </span>
                    <a href="/kitchen" className='kitchen_link page_link'>Switch to Kitchen</a>
                    <h3 className='header_logOut'>Logout</h3>
                </div>
            </header>

            <section className="main_section">
                <div className="login_container">
                    <form
                        action=""
                        className="ant-form ant-form-horizontal commen_ login_box"
                        onSubmit={handleSubmit}
                    >
                        <h4 className="login_heading">Order Management System</h4>
                        <div className="login_content">
                            <h4>Log In</h4>
                            <div className="ant-form-item input_box commen_ ant-form-item-has-success">
                                <div className="ant-form-item-control-input">
                                    <div className="ant-form-item-control-input-content">
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="User ID"
                                            id="username"
                                            aria-required="true"
                                            className="ant-input ant-input-status-success commen_ input_txt"
                                            value={credentials.username}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="ant-form-item-control-input">
                                    <div className="ant-form-item-control-input-content">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            id="password"
                                            aria-required="true"
                                            className="ant-input ant-input-status-success commen_ input_txt"
                                            value={credentials.password}
                                            onChange={handleChange}
                                        />
                                        <span className="ant-input-suffix">
                                            <span className="ant-input-password-icon">Hide</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {error && <p className="error_message">{error}</p>}
                        </div>
                        <div className="btn_grp">
                            <button
                                type="button"
                                className="ant-btn commen_ ant-btn-default btn_custom clear_btn"
                            >
                                Clear
                            </button>
                            <button
                                type="submit"
                                className="ant-btn commen_ ant-btn-default btn_custom submit_btn"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>

    );
};

export default Login;