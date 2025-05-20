import { BookOpen, MessageCircle, Brain, Star } from 'lucide-react';
import home from '../assets/home.svg';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="edu-assist">
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">EduAssist</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Chatbot">Chatbot</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
            </ul>
            <div className="ms-3 d-flex">
              <button className="btn btn-outline-light me-2" onClick={()=>{navigate('/login')}}>Login</button>
              <button className="btn btn-light" onClick={()=>{navigate('/signup')}}>Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">Your Personal Learning Assistant</h1>
              <p className="lead mb-4">Get instant homework help, study assistance, and personalized learning recommendations powered by AI. Available 24/7 to help you succeed.</p>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-light btn-lg px-4">Get Started</button>
                <button className="btn btn-outline-light btn-lg px-4">Learn More</button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 text-center">
              <img 
                src={home} 
                alt="Student using EduAssist" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">How EduAssist Helps Students</h2>
            <p className="text-muted">Powerful tools to enhance your learning experience</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <BookOpen size={48} className="text-primary" />
                  </div>
                  <h4 className="card-title">Homework Helper</h4>
                  <p className="card-text">Get step-by-step explanations for any subject, from math to literature. Upload a problem and receive detailed solutions.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <Brain size={48} className="text-primary" />
                  </div>
                  <h4 className="card-title">Study Assistant</h4>
                  <p className="card-text">Create flashcards, quizzes, and summary notes from your study materials to improve retention and understanding.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <MessageCircle size={48} className="text-primary" />
                  </div>
                  <h4 className="card-title">24/7 AI Support</h4>
                  <p className="card-text">Ask questions anytime and receive instant answers from our AI tutor that adapts to your learning style.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">How It Works</h2>
            <p className="text-muted">Getting started with EduAssist is simple</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                      <span className="fw-bold">1</span>
                    </div>
                    <h4>Create an Account</h4>
                    <p className="text-muted">Sign up for free and set up your academic profile with subjects and goals.</p>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                      <span className="fw-bold">2</span>
                    </div>
                    <h4>Ask Questions</h4>
                    <p className="text-muted">Upload problems, ask questions, or request explanations on any topic.</p>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                      <span className="fw-bold">3</span>
                    </div>
                    <h4>Get Instant Help</h4>
                    <p className="text-muted">Receive personalized explanations, study guides, and practice problems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">What Students Say</h2>
            <p className="text-muted">Join thousands of satisfied students improving their grades</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex text-warning mb-3">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="card-text">"EduAssist helped me understand calculus when I was struggling. The step-by-step explanations made complex problems simple to understand."</p>
                  <div className="d-flex align-items-center mt-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      <span className="fw-bold">M</span>
                    </div>
                    <div>
                      <h6 className="mb-0">Michael Brown</h6>
                      <small className="text-muted">High School Student</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex text-warning mb-3">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="card-text">"As a college student with a part-time job, I love that I can get help anytime, day or night. The study guides have saved me hours of time."</p>
                  <div className="d-flex align-items-center mt-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      <span className="fw-bold">S</span>
                    </div>
                    <div>
                      <h6 className="mb-0">Sarah Johnson</h6>
                      <small className="text-muted">College Student</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex text-warning mb-3">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="card-text">"My grades improved from a C to an A after using EduAssist for a semester. The practice quizzes helped me identify my weak areas."</p>
                  <div className="d-flex align-items-center mt-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      <span className="fw-bold">J</span>
                    </div>
                    <div>
                      <h6 className="mb-0">James Rodriguez</h6>
                      <small className="text-muted">University Student</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="fw-bold mb-3">EduAssist</h5>
              <p>Your AI-powered learning companion, helping students achieve academic success through personalized assistance and interactive learning tools.</p>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-white">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-3 col-sm-6">
              <h6 className="fw-bold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Blog</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Press</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-3 col-sm-6">
              <h6 className="fw-bold mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Help Center</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Contact Us</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">FAQs</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Community</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-3 col-sm-6">
              <h6 className="fw-bold mb-3">Legal</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Terms of Service</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Privacy Policy</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Cookie Policy</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Security</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-3 col-sm-6">
              <h6 className="fw-bold mb-3">Solutions</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">High School</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">College</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Test Prep</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Language Learning</a></li>
              </ul>
            </div>
          </div>
          
          <hr className="mt-4 mb-3 border-secondary" />
          
          <div className="row">
            <div className="col-md-6">
              <p className="small text-white-50 mb-md-0">© 2025 EduAssist. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="small text-white-50">Made with ❤️ for students worldwide</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;