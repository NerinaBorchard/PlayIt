import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: null,
            showPassword: false,
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: '',
        };
    }

    handleSignIn = () => {
        this.setState({ redirectTo: '/signin' });
    }

    handleSignUp = async () => {
        const { email, password, confirmPassword } = this.state;

        // Basic validation
        if (!email || !password || password !== confirmPassword) {
            this.setState({ errorMessage: "Please fill all fields correctly." });
            return;
        }

        const username = email.split('@')[0]; // Get username from email
        const name = email.split('@')[0]; ;
        const newUser = {
            email,
            password,
            profile: {
                username,
                name,
                // picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            },
            playlists: [],
            songs: [],
        };

        // Send user data to the server
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                // Successfully signed up
                this.setState({ redirectTo: '/signin' });
            } else {
                const errorData = await response.json();
                this.setState({ errorMessage: errorData.message || "Signup failed." });
            }
        } catch (error) {
            this.setState({ errorMessage: "An error occurred. Please try again." });
        }
    }

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, errorMessage: '' });
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
                textAlign: 'center',
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
            signInText: {
                marginTop: '15px',
            },
            errorMessage: {
                color: 'red',
                marginBottom: '15px',
            },
        };

        return (
            <div style={styles.container}>
                <div style={styles.left}>
                    <img src="/assets/images/logo.png" alt="Logo" style={styles.logo} />
                    <div style={styles.content}>
                        <h1 style={styles.title}>NEW TO PLAYIT</h1>
                        <p style={styles.subtitle}>Enter your email and password to create your account</p>
                        
                        {this.state.errorMessage && <p style={styles.errorMessage}>{this.state.errorMessage}</p>}
                        
                        <div style={styles.formContainer}>
                            <label style={styles.label}>Email</label>
                            <div style={styles.inputContainer}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    style={styles.input}
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            
                            <label style={styles.label}>Password</label>
                            <div style={styles.inputContainer}>
                                <input
                                    type={this.state.showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    style={styles.input}
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                                <div style={styles.eyeIcon} onClick={this.togglePasswordVisibility}>
                                    {this.state.showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                            <label style={styles.label}>Confirm Password</label>
                            <div style={styles.inputContainer}>
                                <input
                                    type={this.state.showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    style={styles.input}
                                    value={this.state.confirmPassword}
                                    onChange={this.handleInputChange}
                                />
                                <div style={styles.eyeIcon} onClick={this.togglePasswordVisibility}>
                                    {this.state.showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                        </div>

                        <button style={styles.button} onClick={this.handleSignUp}>
                            Sign Up
                        </button>
                        <p style={styles.signInText}>
                            Already have an account?<strong onClick={this.handleSignIn} style={{ cursor: 'pointer' }}>Sign In</strong>
                        </p>
                    </div>
                </div>

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

export default SignUpPage;

