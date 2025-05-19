import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  User, 
  School, 
  BookOpen,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
      const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    education_level: '',
    phoneNumber: '',
    agreeTerms: false
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { first_name, last_name, email, password, education_level, phoneNumber } = formData;
      const data = { first_name, last_name, email, password, education_level, phoneNumber };
      const response = await axios.post('http://localhost:8000/user/signup', data);
      console.log(response.data);
      navigate('/login');
    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
    }
  };


  return (
    <div className="edu-assist-register min-vh-100 d-flex flex-column">
      {/* Simple Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <BookOpen size={24} className="me-2" />
            EduAssist
          </a>
          <button className="btn btn-outline-light btn-sm d-none d-md-block" onClick={()=>{navigate('/')}}>
            Back to Home
          </button>
        </div>
      </nav>

      {/* Registration Form Section */}
      <div className="flex-grow-1 d-flex align-items-center py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-4 p-md-5">
                  <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary mb-1">Create Your Account</h2>
                    <p className="text-muted">Join thousands of students improving their academic performance</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      {/* First Name */}
                      <div className="col-md-6 mb-3">
                        <label htmlFor="first_name" className="form-label">First Name</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0">
                            <User size={18} className="text-muted" />
                          </span>
                          <input
                            type="text"
                            className="form-control border-start-0"
                            id="first_name"
                            name="first_name"
                            placeholder="Enter your first name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="col-md-6 mb-3">
                        <label htmlFor="last_name" className="form-label">Last Name</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0">
                            <User size={18} className="text-muted" />
                          </span>
                          <input
                            type="text"
                            className="form-control border-start-0"
                            id="last_name"
                            name="last_name"
                            placeholder="Enter your last name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email field */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <Mail size={18} className="text-muted" />
                        </span>
                        <input
                          type="email"
                          className="form-control border-start-0"
                          id="email"
                          name="email"
                          placeholder="student@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    {/* Email field */}
                    <div className="mb-3">
                      <label htmlFor="phole" className="form-label">Phone Number</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <Mail size={18} className="text-muted" />
                        </span>
                        <input
                          type="text"
                          className="form-control border-start-0"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder=""
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    {/* Education Level */}
                    <div className="mb-3">
                      <label htmlFor="education_level" className="form-label">Education Level</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <School size={18} className="text-muted" />
                        </span>
                        <select 
                          className="form-select border-start-0" 
                          id="education_level"
                          name="education_level"
                          value={formData.education_level}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled selected>Select your education level</option>
                          <option value="middle-school">Middle School</option>
                          <option value="high-school">High School</option>
                          <option value="undergraduate">Undergraduate</option>
                          <option value="graduate">Graduate</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Password field */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Create Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <Lock size={18} className="text-muted" />
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control border-start-0 border-end-0"
                          id="password"
                          name="password"
                          placeholder="Create a secure password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          minLength="8"
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
                      <div className="form-text">Password must be at least 8 characters.</div>
                    </div>

                    {/* Confirm Password field */}
                    <div className="mb-4">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <Lock size={18} className="text-muted" />
                        </span>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className="form-control border-start-0 border-end-0"
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                        <button
                          className="input-group-text bg-light border-start-0"
                          type="button"
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={18} className="text-muted" />
                          ) : (
                            <Eye size={18} className="text-muted" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="agreeTerms">
                          I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> and <a href="#" className="text-decoration-none">Privacy Policy</a>
                        </label>
                      </div>
                    </div>

                    {/* Registration Benefits */}
                    <div className="bg-light p-3 rounded mb-4">
                      <h6 className="fw-bold mb-2">Join EduAssist to get:</h6>
                      <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-center mb-2">
                          <CheckCircle size={16} className="text-primary me-2" />
                          <span>24/7 homework help in all subjects</span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <CheckCircle size={16} className="text-primary me-2" />
                          <span>Personalized study guides and practice questions</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <CheckCircle size={16} className="text-primary me-2" />
                          <span>Unlimited access to our interactive learning tools</span>
                        </li>
                      </ul>
                    </div>

                    {/* Register button */}
                    <div className="d-grid mb-4">
                      <button type="submit" className="btn btn-primary py-2 fw-bold">
                        Create Account
                      </button>
                    </div>

                    

                    
                     

                    {/* Sign in link */}
                    <div className="text-center">
                      <p className="mb-0">
                        Already have an account?{" "}
                        <a href="#" className="text-decoration-none fw-semibold">
                          Log in
                          <ArrowRight size={16} className="ms-1" />
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
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

export default Register;