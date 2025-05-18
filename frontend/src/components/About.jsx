import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BookOpen, 
  Target, 
  Award, 
  Users, 
  Check, 
  BarChart,
  School,
  Heart,
  Lightbulb,
  Globe
} from 'lucide-react';
import edu from '../assets/edu.png';
import edu2 from '../assets/edu2.jpeg';
import people1 from '../assets/people1.jpeg';
import people2 from '../assets/people2.jpeg';
import people3 from '../assets/people3.jpeg';
import people4 from '../assets/people4.jpeg';
import { useNavigate } from 'react-router-dom';
const About = () => {
      const navigate = useNavigate();
  return (
    <div className="edu-assist-about">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">EduAssist</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
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
              <h1 className="display-4 fw-bold mb-3">Our Story</h1>
              <p className="lead mb-4">Transforming education through AI-powered learning assistance since 2021.</p>
            </div>
            <div className="col-lg-6">
              <img 
                src={edu} 
                alt="EduAssist team collaborating" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src={edu2}
                alt="Student using EduAssist" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <div className="mb-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle p-3 mb-3">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="fw-bold">Our Mission</h2>
                <p className="text-muted mb-0">To democratize education by providing affordable, accessible, and personalized learning support to students around the world. We're committed to leveraging cutting-edge AI technology to help every student reach their full academic potential.</p>
              </div>
              
              <div>
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle p-3 mb-3">
                  <School size={24} className="text-white" />
                </div>
                <h2 className="fw-bold">Our Vision</h2>
                <p className="text-muted mb-0">A world where every student, regardless of their background or circumstances, has access to high-quality educational support. We envision a future where AI and human expertise combine to make learning more engaging, effective, and equitable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Core Values</h2>
            <p className="text-muted">The principles that guide everything we do at EduAssist</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center p-3 mb-3">
                    <Lightbulb size={28} className="text-white" />
                  </div>
                  <h4>Innovation</h4>
                  <p className="text-muted mb-0">We constantly explore new technologies to improve learning outcomes for students.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center p-3 mb-3">
                    <Award size={28} className="text-white" />
                  </div>
                  <h4>Excellence</h4>
                  <p className="text-muted mb-0">We're committed to delivering the highest quality educational support and resources.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center p-3 mb-3">
                    <Globe size={28} className="text-white" />
                  </div>
                  <h4>Accessibility</h4>
                  <p className="text-muted mb-0">We believe quality education should be accessible to every student worldwide.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center p-3 mb-3">
                    <Heart size={28} className="text-white" />
                  </div>
                  <h4>Empathy</h4>
                  <p className="text-muted mb-0">We deeply understand student challenges and design our solutions accordingly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Journey</h2>
            <p className="text-muted">From a small startup to a leading educational technology company</p>
          </div>
          
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="timeline">
                {/* Timeline Item 1 */}
                <div className="row g-0 mb-5">
                  <div className="col-md-6 text-md-end pe-md-5 mb-3 mb-md-0">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h5 className="fw-bold">2021</h5>
                      <h6 className="text-primary mb-3">The Beginning</h6>
                      <p className="mb-0">EduAssist was founded by a team of educators and AI specialists with a mission to make quality education more accessible.</p>
                    </div>
                  </div>
                  <div className="col-md-6 position-relative">
                    <div className="timeline-dot d-none d-md-block"></div>
                  </div>
                </div>
                
                {/* Timeline Item 2 */}
                <div className="row g-0 mb-5">
                  <div className="col-md-6 position-relative order-md-1">
                    <div className="timeline-dot d-none d-md-block"></div>
                  </div>
                  <div className="col-md-6 text-md-start ps-md-5 mb-3 mb-md-0 order-md-2">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h5 className="fw-bold">2022</h5>
                      <h6 className="text-primary mb-3">Growth & Expansion</h6>
                      <p className="mb-0">Our platform reached 100,000 users and expanded support to cover over 20 academic subjects with advanced AI capabilities.</p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Item 3 */}
                <div className="row g-0 mb-5">
                  <div className="col-md-6 text-md-end pe-md-5 mb-3 mb-md-0">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h5 className="fw-bold">2023</h5>
                      <h6 className="text-primary mb-3">Educational Partnerships</h6>
                      <p className="mb-0">We partnered with over 50 educational institutions to bring EduAssist directly to classrooms and enhance the learning experience.</p>
                    </div>
                  </div>
                  <div className="col-md-6 position-relative">
                    <div className="timeline-dot d-none d-md-block"></div>
                  </div>
                </div>
                
                {/* Timeline Item 4 */}
                <div className="row g-0">
                  <div className="col-md-6 position-relative order-md-1">
                    <div className="timeline-dot d-none d-md-block"></div>
                  </div>
                  <div className="col-md-6 text-md-start ps-md-5 order-md-2">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h5 className="fw-bold">2024-2025</h5>
                      <h6 className="text-primary mb-3">Global Impact</h6>
                      <p className="mb-0">Today, EduAssist serves millions of students across 150+ countries, with our technology continuously evolving to meet educational needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Leadership Team</h2>
            <p className="text-muted">Meet the people behind EduAssist's mission</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img src={people1} alt="CEO" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Alexandra Chen</h5>
                  <p className="text-primary mb-3">CEO & Co-Founder</p>
                  <p className="card-text text-muted small">Former educator with 15+ years of experience in EdTech innovation.</p>
                  <div className="mt-3">
                    <a href="#" className="text-muted me-2"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="text-muted"><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img src={people2} alt="CTO" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Marcus Johnson</h5>
                  <p className="text-primary mb-3">CTO & Co-Founder</p>
                  <p className="card-text text-muted small">AI researcher specializing in natural language processing and adaptive learning.</p>
                  <div className="mt-3">
                    <a href="#" className="text-muted me-2"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="text-muted"><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img src={people3} alt="Head of Education" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Sarah Williams</h5>
                  <p className="text-primary mb-3">Head of Education</p>
                  <p className="card-text text-muted small">Former school principal with a passion for curriculum development.</p>
                  <div className="mt-3">
                    <a href="#" className="text-muted me-2"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="text-muted"><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img src={people4} alt="COO" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">David Patel</h5>
                  <p className="text-primary mb-3">Chief Operations Officer</p>
                  <p className="card-text text-muted small">Operations expert with experience scaling education platforms globally.</p>
                  <div className="mt-3">
                    <a href="#" className="text-muted me-2"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="text-muted"><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">EduAssist by the Numbers</h2>
            <p className="text-muted">The impact we've made so far</p>
          </div>
          
          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="p-4 bg-primary rounded text-white">
                <BarChart size={36} className="mb-3" />
                <h2 className="display-5 fw-bold mb-0">5M+</h2>
                <p className="mb-0">Active Students</p>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="p-4 bg-primary rounded text-white">
                <BookOpen size={36} className="mb-3" />
                <h2 className="display-5 fw-bold mb-0">100+</h2>
                <p className="mb-0">Subjects Covered</p>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="p-4 bg-primary rounded text-white">
                <Globe size={36} className="mb-3" />
                <h2 className="display-5 fw-bold mb-0">150+</h2>
                <p className="mb-0">Countries Reached</p>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="p-4 bg-primary rounded text-white">
                <Check size={36} className="mb-3" />
                <h2 className="display-5 fw-bold mb-0">98%</h2>
                <p className="mb-0">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">What People Say About Us</h2>
            <p className="text-muted">Educators, parents, and students share their experiences</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-quote fs-1 text-primary opacity-25"></i>
                  </div>
                  <p className="mb-4">"As a teacher, I've seen EduAssist transform struggling students into confident learners. The platform complements classroom instruction perfectly."</p>
                  <div className="d-flex align-items-center">
                    
                    <div>
                      <h6 className="mb-0">Robert Turner</h6>
                      <p className="text-muted small mb-0">High School Math Teacher</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-quote fs-1 text-primary opacity-25"></i>
                  </div>
                  <p className="mb-4">"EduAssist has been a game-changer for my daughter. She's gained confidence in subjects she previously struggled with and now enjoys learning."</p>
                  <div className="d-flex align-items-center">
                   
                    <div>
                      <h6 className="mb-0">Maria Rodriguez</h6>
                      <p className="text-muted small mb-0">Parent of High School Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-quote fs-1 text-primary opacity-25"></i>
                  </div>
                  <p className="mb-4">"Our partnership with EduAssist has resulted in measurable improvements in student performance. We've seen grade point averages increase by 15% on average."</p>
                  <div className="d-flex align-items-center">
                   
                    <div>
                      <h6 className="mb-0">Dr. James Wilson</h6>
                      <p className="text-muted small mb-0">School Principal</p>
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

      {/* Add custom CSS for timeline */}
      <style jsx>{`
        .timeline-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background-color: var(--bs-primary);
          border-radius: 50%;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background-color: var(--bs-primary);
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
};

export default About;