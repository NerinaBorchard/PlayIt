import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: null,
            showPassword: false,
        };
    }

    handleSignUp = () => {
        this.setState({ redirectTo: '/signup' });
    }

    handleSignIn = () => {
        this.setState({ redirectTo: '/dashboard' }); // Redirect to dashboard after signing in
    }

    handleForgotPassword = () => {
        this.setState({ redirectTo: '/forgot-password' }); // Redirect to forgot password page
    }

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    }

    render() {
        if (this.state.redirectTo) {
            return <Navigate to={this.state.redirectTo} />;
        }

        const styles = {
            container: {
                display: 'flex',
                height: '100vh',
            },
            left: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                textAlign: 'center', // Center-align the title and sign-up text
            },
            logo: {
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '100px',
            },
            right: {
                flex: 1,
            },
            image: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            },
            content: {
                textAlign: 'center',
            },
            title: {
                fontSize: '2rem',
                marginBottom: '10px',
            },
            subtitle: {
                fontSize: '1rem',
                marginBottom: '20px',
            },
            formContainer: {
                textAlign: 'left',
                width: '300px',
            },
            label: {
                fontSize: '1rem',
                marginBottom: '5px',
                fontWeight: 'bold',
            },
            inputContainer: {
                position: 'relative',
                marginBottom: '15px',
            },
            input: {
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
                paddingRight: '40px',
            },
            eyeIcon: {
                position: 'absolute',
                top: '50%',
                right: '-35px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
            },
            checkboxContainer: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
            },
            checkboxLabel: {
                display: 'flex',
                alignItems: 'center',
            },
            checkbox: {
                marginRight: '5px',
            },
            forgotPassword: {
                cursor: 'pointer',
                fontWeight: 'bold',
                // paddingLeft: '50px',
                // color: '#007BFF',
                // textDecoration: 'underline',
                // marginLeft: 'auto', // Align to the right
            },
            button: {
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
                marginBottom: '15px',
                background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
                color: 'white',
            },
            signupText: {
                marginTop: '15px',
            },
        };

        return (
            <div style={styles.container}>
                {/* Left half with form */}
                <div style={styles.left}>
                    <img src="/assets/images/logo.png" alt="Logo" style={styles.logo} />
                    <div style={styles.content}>
                        <h1 style={styles.title}>WELCOME BACK</h1>
                        <p style={styles.subtitle}>Enter your email and password to access your account.</p>
                        
                        <div style={styles.formContainer}>
                            <label style={styles.label}>Email</label>
                            <div style={styles.inputContainer}>
                                <input type="text" placeholder="Email" style={styles.input} />
                            </div>
                            
                            <label style={styles.label}>Password</label>
                            <div style={styles.inputContainer}>
                                <input
                                    type={this.state.showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    style={styles.input}
                                />
                                <div style={styles.eyeIcon} onClick={this.togglePasswordVisibility}>
                                    {this.state.showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                            <div style={styles.checkboxContainer}>
                                <label style={styles.checkboxLabel}>
                                    <input type="checkbox" style={styles.checkbox} />
                                    Remember Me
                                </label>
                                <span style={styles.forgotPassword} onClick={this.handleForgotPassword}>
                                    Forgot Password?
                                </span>
                            </div>
                        </div>

                        <button style={styles.button} onClick={this.handleSignIn}>
                            Sign In
                        </button>
                        <p style={styles.signupText}>
                            Don't have an account? <strong onClick={this.handleSignUp} style={{ cursor: 'pointer' }}>Sign Up</strong>
                        </p>
                    </div>
                </div>

                {/* Right half with the image */}
                <div style={styles.right}>
                    <img
                        src="/assets/images/Splash4.jpg"
                        alt="Sign In"
                        style={styles.image}
                    />
                </div>
            </div>
        );
    }
}

export default SignInPage;
