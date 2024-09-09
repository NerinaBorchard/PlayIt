// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Posts from './pages/Posts';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/posts" element={<Posts />} />
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SplashPage from './pages/SplashPage';
// import SignInPage from './pages/SignInPage';
// import SignUpPage from './pages/SignUpPage';

// function App() {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/" exact component={SplashPage} />
//                 <Route path="/signin" component={SignInPage} />
//                 <Route path="/signup" component={SignUpPage} />
//             </Switch>
//         </Router>
//     );
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;