// // src/pages/SplashPage.js
// import React, { Component } from 'react';
// import './css/SplashPage.css'; // Assuming we are using a CSS file for styling

// class SplashPage extends Component {
//     render() {
//         return (
//             <div className="splash-container">
//                 {/* Left half with the image */}
//                 <div className="splash-left">
//                     <img src="/assets/images/Splash.jpg" alt="Splash" />
//                 </div>

//                 {/* Right half with logo, title, subtitle, and buttons */}
//                 <div className="splash-right">
//                     <img src="/assets/images/Logo.png" alt="Logo" className="logo" />

//                     <div className="content">
//                         <h1 className="title">Welcome to My App</h1>
//                         <p className="subtitle">Your journey starts here</p>
//                         <button className="signup-btn">Sign Up</button>
//                         <button className="signin-btn">Sign In</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default SplashPage;

// src/pages/SplashPage.js
import React, { Component } from 'react';

class SplashPage extends Component {
    render() {
        // Inline styles for the splash page
        const styles = {
            container: {
                display: 'flex',
                height: '100vh'
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
                position: 'relative',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
            },
            logo: {
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '150px',
            },
            content: {
                textAlign: 'center',
            },
            title: {
                fontSize: '2.5rem',
                marginBottom: '10px',
            },
            subtitle: {
                fontSize: '1.2rem',
                marginBottom: '30px',
            },
            button: {
                width: '200px',
                padding: '10px 0',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
                marginBottom: '15px',
            },
            signupButton: {
                backgroundColor: '#00aaff',
                color: 'white',
            },
            signinButton: {
                backgroundColor: 'white',
                color: '#00aaff',
                border: '2px solid #00aaff',
            }
        };

        return (
            <div style={styles.container}>
                {/* Left half with the image */}
                <div style={styles.left}>
                    <img
                        src="/assets/images/Splash.jpg"
                        alt="Splash"
                        style={styles.image}
                    />
                </div>

                {/* Right half with logo, title, subtitle, and buttons */}
                <div style={styles.right}>
                    <img src="/assets/images/logo.png" alt="Logo" style={styles.logo} />

                    <div style={styles.content}>
                        <h1 style={styles.title}>Welcome to My App</h1>
                        <p style={styles.subtitle}>Your journey starts here</p>
                        <button style={{ ...styles.button, ...styles.signupButton }}>
                            Sign Up
                        </button>
                        <br />
                        <button style={{ ...styles.button, ...styles.signinButton }}>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SplashPage;

