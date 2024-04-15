import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Terms from './Components/terms';
import Result from './Components/Result';
import Home from './Components/Home';
import Quiz from './Components/quiz/quiz';
import { SignupForm, SigninForm } from './Components/LoginSignup/LoginSignup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/terms" element={<Terms/>} />
        </Routes>
      </Router>
    </div>
  );
}

const SignupPage = () => (
  <>
    <SignupForm className="signup-heading" />
    {}
  </>
);

const SigninPage = () => (
  <>
    <SigninForm className="signin-heading" />
    {/* Navbar is not included here */}
  </>
);

export default App;
