import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  LogIn,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { useNavigate, NavLink } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,       setEmail]       = useState('');
  const [password,    setPassword]    = useState('');
  const [rememberMe,  setRememberMe]  = useState(false);
  const [errorMsg,    setErrorMsg]    = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await axios.post(
        'http://localhost:8000/user/login',
        { email, password },
        { withCredentials: true }
      );

      // success: store token + user info
      const { authToken, id, role } = response.data;
      if (rememberMe) {
        localStorage.setItem('authToken', authToken);
      } else {
        sessionStorage.setItem('authToken', authToken);
      }
      localStorage.setItem('userId', id);
      localStorage.setItem('role', role);

      navigate('/');
    } catch (error) {
      // backend returns { error: "..." }
      const msg = error.response?.data?.error
        || 'Login failed. Please check your credentials.';
      setErrorMsg(msg);
    }
  };

  return (
    <div className="edu-assist-login min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <BookOpen size={24} className="me-2" />
            EduAssist
          </NavLink>
          <button
            className="btn btn-outline-light btn-sm d-none d-md-block"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </nav>

      {/* Main */}
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

                  {errorMsg && (
                    <div className="alert alert-danger" role="alert">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Email */}
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
                          id="email"
                          className="form-control border-start-0"
                          placeholder="student@example.com"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <NavLink to="/forgot-password" className="small text-primary">
                          Forgot password?
                        </NavLink>
                      </div>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <Lock size={18} className="text-muted" />
                        </span>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          className="form-control border-start-0 border-end-0"
                          placeholder="Enter your password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          className="input-group-text bg-light border-start-0"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword 
                            ? <EyeOff size={18} className="text-muted" />
                            : <Eye    size={18} className="text-muted" />}
                        </button>
                      </div>
                    </div>

                    {/* Remember me */}
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={e => setRememberMe(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>

                    {/* Submit */}
                    <div className="d-grid mb-4">
                      <button type="submit" className="btn btn-primary py-2 fw-bold">
                        <LogIn size={18} className="me-2" />
                        Log In
                      </button>
                    </div>

                    {/* Sign up */}
                    <div className="text-center">
                      <p className="mb-0">
                        Don't have an account?{' '}
                        <NavLink to="/signup" className="fw-semibold text-decoration-none">
                          Sign up <ArrowRight size={16} className="ms-1" />
                        </NavLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              <div className="text-center mt-4">
                <p className="small text-muted mb-0">
                  Need help? <NavLink to="/support">Contact support</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-4 border-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="small text-muted mb-0">© 2025 EduAssist. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list-inline mb-0">
                {['Terms','Privacy','Security','Cookie Settings'].map((t,i) => (
                  <React.Fragment key={t}>
                    <li className="list-inline-item">
                      <NavLink to={`/${t.replace(' ', '-').toLowerCase()}`} className="small text-muted">
                        {t}
                      </NavLink>
                    </li>
                    {i < 3 && <li className="list-inline-item text-muted">·</li>}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
