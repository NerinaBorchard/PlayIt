// // // src/pages/SplashPage.js
// // import React, { Component } from 'react';
// // import './css/SplashPage.css'; // Assuming we are using a CSS file for styling

// // class SplashPage extends Component {
// //     render() {
// //         return (
// //             <div className="splash-container">
// //                 {/* Left half with the image */}
// //                 <div className="splash-left">
// //                     <img src="/assets/images/Splash.jpg" alt="Splash" />
// //                 </div>

// //                 {/* Right half with logo, title, subtitle, and buttons */}
// //                 <div className="splash-right">
// //                     <img src="/assets/images/Logo.png" alt="Logo" className="logo" />

// //                     <div className="content">
// //                         <h1 className="title">Welcome to My App</h1>
// //                         <p className="subtitle">Your journey starts here</p>
// //                         <button className="signup-btn">Sign Up</button>
// //                         <button className="signin-btn">Sign In</button>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     }
// // }

// // export default SplashPage;

// // src/pages/SplashPage.js
// import React, { Component } from 'react';

// class SplashPage extends Component {
//     render() {
//         // Inline styles for the splash page
//         const styles = {
//             container: {
//                 display: 'flex',
//                 height: '100vh'
//             },
//             left: {
//                 flex: 1,
//                 backgroundColor: '#f0f0f0',
//             },
//             image: {
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//             },
//             right: {
//                 flex: 1,
//                 position: 'relative',
//                 backgroundColor: 'white',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 padding: '20px',
//             },
//             logo: {
//                 position: 'absolute',
//                 top: '20px',
//                 right: '20px',
//                 width: '150px',
//             },
//             content: {
//                 textAlign: 'center',
//             },
//             title: {
//                 fontSize: '2.5rem',
//                 marginBottom: '10px',
//             },
//             subtitle: {
//                 fontSize: '1.2rem',
//                 marginBottom: '30px',
//             },
//             button: {
//                 width: '400px',
//                 padding: '10px 0',
//                 fontSize: '1rem',
//                 border: 'none',
//                 cursor: 'pointer',
//                 borderRadius: '5px',
//                 marginBottom: '15px',
//             },
//             signupButton: {
//                 backgroundColor: '#00aaff',
//                 color: 'white',
//             },
//             signinButton: {
//                 backgroundColor: 'white',
//                 color: '#00aaff',
//                 border: '2px solid #00aaff',
//             }
//         };

//         return (
//             <div style={styles.container}>
//                 {/* Left half with the image */}
//                 <div style={styles.left}>
//                     <img
//                         src="/assets/images/Splash.jpg"
//                         alt="Splash"
//                         style={styles.image}
//                     />
//                 </div>

//                 {/* Right half with logo, title, subtitle, and buttons */}
//                 <div style={styles.right}>
//                     <img src="/assets/images/logo.png" alt="Logo" style={styles.logo} />

//                     <div style={styles.content}>
//                         <h1 style={styles.title}>WELCOME TO PLAYIT</h1>
//                         <p style={styles.subtitle}>A place for you to share playlist and discover new ones</p>
//                         <button style={{ ...styles.button, ...styles.signinButton }}>
//                             Sign In
//                         </button>
//                         <br />
//                         <button style={{ ...styles.button, ...styles.signupButton }}>
//                             Sign Up
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default SplashPage;

import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class SplashPage extends Component {
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
        this.setState({ redirectTo: '/signin' });
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
                width: '100px',
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
                width: '400px',
                padding: '10px 0',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
                marginBottom: '15px',
            },
            signupButton: {
                backgroundColor: '#000000',
                color: 'white',
            },
            signinButton: {
                background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
                color: 'white',
            },
        };

        return (
            <div style={styles.container}>
                {/* Left half with the image */}
                <div style={styles.left}>
                    <img
                        src="/assets/images/Splash4.jpg"
                        alt="Splash"
                        style={styles.image}
                    />
                </div>

                {/* Right half with logo, title, subtitle, and buttons */}
                <div style={styles.right}>
                    <img src="/assets/images/logo.png" alt="Logo" style={styles.logo} />

                    <div style={styles.content}>
                        <h1 style={styles.title}>WELCOME TO PLAYIT</h1>
                        <p style={styles.subtitle}>A place for you to share playlists and discover new ones</p>
                        <button
                            style={{ ...styles.button, ...styles.signinButton }}
                            onClick={this.handleSignIn}
                        >
                            Sign In
                        </button>
                        <br />
                        <button
                            style={{ ...styles.button, ...styles.signupButton }}
                            onClick={this.handleSignUp}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SplashPage;
