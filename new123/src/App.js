import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Terms from './Components/terms';
import Result from './Components/Result';
import Home from './Components/Home';
import Quiz from './Components/quiz/quiz';
import { SignupForm, SigninForm } from './Components/LoginSignup/LoginSignup';
import VerificationPage from './Components/LoginSignup/Verification';

function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<Navbar/>,
    element: <Home/>
  },
  {
    path: '/result',
    element: <Result/>
  },
  {
    path:'/quiz',
    
    element: <Quiz/>
  },
  {
    path:'/signup',
    element: <LoginSignup/>
  }
])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/verify" element={<VerificationPage />} />
          <Route path="/terms" element={<Terms/>} />
        </Routes>
      </Router>
    </div>
  );
}

const SignupPage = () => (
  <>
    <SignupForm className="signup-heading" />
  </>
);

const SigninPage = () => (
  <>
    <SigninForm className="signin-heading" />
  </>
);

export default App;
