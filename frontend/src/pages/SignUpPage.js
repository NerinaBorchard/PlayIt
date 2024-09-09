// import React, { Component } from 'react';
// import { Navigate } from 'react-router-dom';

// class SignUpPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             redirectTo: null,
//         };
//     }

//     handleSignIn = () => {
//         this.setState({ redirectTo: '/signin' });
//     }

//     handleSignUp = () => {
//         // Handle Sign Up action
//         this.setState({ redirectTo: '/dashboard' }); // Redirect to dashboard after signing up
//     }

//     render() {
//         if (this.state.redirectTo) {
//             return <Navigate to={this.state.redirectTo} />;
//         }

//         const styles = {
//             container: {
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 height: '100vh',
//                 background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 52%, rgba(223,8,8,1) 80%, rgba(218,83,20,1) 90%, rgba(255,175,0,1) 100%)',
//             },
//             form: {
//                 backgroundColor: 'white',
//                 padding: '30px',
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                 width: '400px',
//                 textAlign: 'center',
//             },
//             title: {
//                 fontSize: '2rem',
//                 marginBottom: '20px',
//             },
//             subtitle: {
//                 fontSize: '1rem',
//                 marginBottom: '20px',
//             },
//             label: {
//                 textAlign: 'left',
//                 display: 'block',
//                 fontWeight: 'bold',
//                 marginBottom: '5px',
//             },
//             input: {
//                 width: '100%',
//                 padding: '10px',
//                 marginBottom: '20px',
//                 fontSize: '1rem',
//                 borderRadius: '5px',
//                 border: '1px solid #ccc',
//             },
//             checkboxContainer: {
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 marginBottom: '20px',
//             },
//             checkboxLabel: {
//                 display: 'flex',
//                 alignItems: 'center',
//             },
//             checkbox: {
//                 marginRight: '5px',
//             },
//             button: {
//                 width: '100%',
//                 padding: '10px',
//                 fontSize: '1rem',
//                 border: 'none',
//                 cursor: 'pointer',
//                 borderRadius: '5px',
//                 backgroundColor: '#000',
//                 color: 'white',
//                 marginBottom: '10px',
//             },
//             text: {
//                 fontSize: '1rem',
//                 marginTop: '10px',
//             },
//         };

//         return (
//             <div style={styles.container}>
//                 <div style={styles.form}>
//                     <h1 style={styles.title}>Sign Up</h1>
//                     <p style={styles.subtitle}>Create your account</p>
//                     <label style={styles.label}>Email</label>
//                     <input type="email" placeholder="Enter your email" style={styles.input} />
//                     <label style={styles.label}>Password</label>
//                     <input type="password" placeholder="Enter your password" style={styles.input} />
//                     <div style={styles.checkboxContainer}>
//                         <label style={styles.checkboxLabel}>
//                             <input type="checkbox" style={styles.checkbox} />
//                             Remember Me
//                         </label>
//                         <a href="#">Forgot Password?</a>
//                     </div>
//                     <button style={styles.button} onClick={this.handleSignUp}>
//                         Sign Up
//                     </button>
//                     <p style={styles.text}>
//                         Already have an account? <strong onClick={this.handleSignIn} style={{cursor: 'pointer'}}>Sign In</strong>
//                     </p>
//                 </div>
//             </div>
//         );
//     }
// }

// export default SignUpPage;

import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: null,
            showPassword: false,
        };
    }

    handleSignIn = () => {
        this.setState({ redirectTo: '/signin' });
    }

    handleSignUp = () => {
        // Handle Sign Up action
        this.setState({ redirectTo: '/dashboard' }); // Redirect to dashboard after signing up
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
        };

        return (
            <div style={styles.container}>
                {/* Left half with form */}
                <div style={styles.left}>
                    <img src="/assets/images/logo.png" alt="Logo" style={styles.logo} />
                    <div style={styles.content}>
                        <h1 style={styles.title}>NEW TO PLAYIT</h1>
                        <p style={styles.subtitle}>Enter your email and password to create your account</p>
                        
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
                            <label style={styles.label}>Confirm Password</label>
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
                        </div>

                        <button style={styles.button} onClick={this.handleSignUp}>
                            Sign Up
                        </button>
                        <p style={styles.signInText}>
                            Already have an account?<strong onClick={this.handleSignIn} style={{ cursor: 'pointer' }}>Sign In</strong>
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

export default SignUpPage;

