import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LogIn, Eye, EyeOff, Lock, Mail, ArrowRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', { email, password, rememberMe });
  };

  return (
    <div className="edu-assist-login min-vh-100 d-flex flex-column">
      {/* Simple Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <BookOpen size={24} className="me-2" />
            EduAssist
          </a>
          <button className="btn btn-outline-light btn-sm d-none d-md-block" onClick={()=>navigate('/')}>
            Back to Home
          </button>
        </div>
      </nav>

      {/* Login Form Section */}
      <div className="flex-grow-1 d-flex align-items-center py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-4 p-md-5">
                  <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary mb-1">Welcome back</h2>
                    <p className="text-muted">Log in to continue your learning journey</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Email field */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <Mail size={18} className="text-muted" />
                        </span>
                        <input
                          type="email"
                          className="form-control border-start-0"
                          id="email"
                          placeholder="student@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Password field */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <a href="#" className="text-decoration-none small text-primary">
                          Forgot password?
                        </a>
                      </div>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <Lock size={18} className="text-muted" />
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control border-start-0 border-end-0"
                          id="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button
                          className="input-group-text bg-light border-start-0"
                          type="button"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOff size={18} className="text-muted" />
                          ) : (
                            <Eye size={18} className="text-muted" />
                          )}
                        </button>
                      </div>
                    </div>

                    

                    {/* Login button */}
                    <div className="d-grid mb-4">
                      <button type="submit" className="btn btn-primary py-2 fw-bold">
                        <LogIn size={18} className="me-2" />
                        Log In
                      </button>
                    </div>

                    

                   

                    {/* Sign up link */}
                    <div className="text-center">
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <a href="#" className="text-decoration-none fw-semibold">
                          Sign up
                          <ArrowRight size={16} className="ms-1" />
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Help text */}
              <div className="text-center mt-4">
                <p className="small text-muted mb-0">Need help? <a href="#" className="text-decoration-none">Contact support</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-4 border-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="small text-muted mb-md-0">© 2025 EduAssist. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="list-inline mb-0 text-center text-md-end">
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none small text-muted">Terms</a>
                </li>
                <li className="list-inline-item">
                  <span className="text-muted mx-1">·</span>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none small text-muted">Privacy</a>
                </li>
                <li className="list-inline-item">
                  <span className="text-muted mx-1">·</span>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none small text-muted">Security</a>
                </li>
                <li className="list-inline-item">
                  <span className="text-muted mx-1">·</span>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none small text-muted">Cookie Settings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;