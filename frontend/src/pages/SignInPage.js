import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: null,
        };
    }

    handleSignUp = () => {
        this.setState({ redirectTo: '/signup' });
    }

    handleSignIn = () => {
        this.setState({ redirectTo: '/dashboard' }); // Redirect to dashboard after signing in
    }

    render() {
        if (this.state.redirectTo) {
            return <Navigate to={this.state.redirectTo} />;
        }

        const styles = {
            container: {
                display: 'flex',
                height: '100vh',
                // background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 52%, rgba(223,8,8,1) 80%, rgba(218,83,20,1) 90%, rgba(255,175,0,1) 100%)',
            },
            left: {
                flex: 1,
                backgroundColor: '#f0f0f0',
            },
            image: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            },
            right: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
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
            input: {
                width: '300px',
                padding: '10px',
                marginBottom: '15px',
                fontSize: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
            },
            button: {
                width: '300px',
                padding: '10px',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
                marginBottom: '15px',
                backgroundColor: '#000',
                color: 'white',
            },
        };

        return (
            <div style={styles.container}>
                {/* Left half with the image */}
                <div style={styles.left}>
                    <img
                        src="/assets/images/Splash2.jpg"
                        alt="Sign In"
                        style={styles.image}
                    />
                </div>

                {/* Right half with form */}
                <div style={styles.right}>
                    <div style={styles.content}>
                        <h1 style={styles.title}>WELCOME BACK</h1>
                        <p style={styles.subtitle}>Enter your email and password to access your account.</p>
                        <input type="text" placeholder="Email" style={styles.input} />
                        <br />
                        <input type="password" placeholder="Password" style={styles.input} />
                        <br />
                        <button style={styles.button} onClick={this.handleSignIn}>
                            Sign In
                        </button>
                        <p>Don't have an account? <strong onClick={this.handleSignUp} style={{cursor: 'pointer'}}>Sign Up</strong></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInPage;
