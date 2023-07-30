import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    // State variables to store login credentials and error messages
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!credentials.username || !credentials.password) {
            setError('Please enter both username and password.');
            return;
        }


        if (credentials.username === 'admin' && credentials.password === 'admin') {
            setError('');
            alert('Login successful!'); // Replace this with actual login logic
        } else {
            setError('Invalid username or password.');
        }
        try {
            const response = await axios.post("/login", credentials)
            console.log({ response });
        } catch (error) {
            console.log({ error });
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
