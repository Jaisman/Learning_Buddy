import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, Video, MessageCircle, User, Bell, Search, ChevronRight, Play, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [doubtText, setDoubtText] = useState('');

  // Sample data
  const upcomingTests = [
    { id: 1, subject: 'Mathematics', topic: 'Calculus - Derivatives', date: '2025-05-25', time: '10:00 AM', duration: '2 hours' },
    { id: 2, subject: 'Physics', topic: 'Quantum Mechanics', date: '2025-05-27', time: '2:00 PM', duration: '1.5 hours' },
    { id: 3, subject: 'Chemistry', topic: 'Organic Chemistry', date: '2025-05-30', time: '9:00 AM', duration: '2 hours' }
  ];

  const watchedVideos = [
    { id: 1, title: 'Introduction to Derivatives', subject: 'Mathematics', duration: '45 min', watchedOn: '2025-05-18', progress: 100 },
    { id: 2, title: 'Wave-Particle Duality', subject: 'Physics', duration: '30 min', watchedOn: '2025-05-17', progress: 100 },
    { id: 3, title: 'Alcohols and Phenols', subject: 'Chemistry', duration: '52 min', watchedOn: '2025-05-16', progress: 75 },
    { id: 4, title: 'Limits and Continuity', subject: 'Mathematics', duration: '38 min', watchedOn: '2025-05-15', progress: 100 }
  ];

  const courses = [
    { id: 1, name: 'Advanced Mathematics', progress: 75, nextLesson: 'Integration Techniques', totalLessons: 24, completedLessons: 18 },
    { id: 2, name: 'Modern Physics', progress: 60, nextLesson: 'Atomic Structure', totalLessons: 20, completedLessons: 12 },
    { id: 3, name: 'Organic Chemistry', progress: 45, nextLesson: 'Reaction Mechanisms', totalLessons: 18, completedLessons: 8 }
  ];

  const recentDoubts = [
    { id: 1, question: 'How do I solve integration by parts?', subject: 'Mathematics', status: 'answered', askedOn: '2025-05-18' },
    { id: 2, question: 'What is the uncertainty principle?', subject: 'Physics', status: 'pending', askedOn: '2025-05-17' },
    { id: 3, question: 'Explain SN1 vs SN2 reactions', subject: 'Chemistry', status: 'answered', askedOn: '2025-05-16' }
  ];

  const handleDoubtSubmit = (e) => {
    e.preventDefault();
    if (doubtText.trim()) {
      alert('Doubt submitted successfully!');
      setDoubtText('');
    }
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">EduAssist</span>
          <div className="navbar-nav ms-auto d-flex flex-row">
            <div className="nav-item dropdown">
              <button className="btn btn-outline-light" data-bs-toggle="dropdown" onClick={()=>{navigate('/stu-profile')}}>
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 px-0">
            <div className="bg-white shadow-sm vh-100 pt-3">
              <div className="list-group list-group-flush">
                <button 
                  className={`list-group-item list-group-item-action border-0 ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <BookOpen size={18} className="me-2" />
                  Overview
                </button>
                <button 
                  className={`list-group-item list-group-item-action border-0 ${activeTab === 'tests' ? 'active' : ''}`}
                  onClick={() => setActiveTab('tests')}
                >
                  <Calendar size={18} className="me-2" />
                  Upcoming Tests
                </button>
                <button 
                  className={`list-group-item list-group-item-action border-0 ${activeTab === 'doubts' ? 'active' : ''}`}
                  onClick={() => setActiveTab('doubts')}
                >
                  <MessageCircle size={18} className="me-2" />
                  Ask Doubts
                </button>
                <button 
                  className={`list-group-item list-group-item-action border-0 ${activeTab === 'videos' ? 'active' : ''}`}
                  onClick={() => setActiveTab('videos')}
                >
                  <Video size={18} className="me-2" />
                  Watched Videos
                </button>
                <button 
                  className={`list-group-item list-group-item-action border-0 ${activeTab === 'courses' ? 'active' : ''}`}
                  onClick={() => setActiveTab('courses')}
                >
                  <Play size={18} className="me-2" />
                  Continue Course
                </button>
                <button 
                  className={`list-group-item list-group-item-action border-0 ${activeTab === 'askai' ? 'active' : ''}`}
                  onClick={() => setActiveTab('askai')}
                >
                  <BookOpen size={18} className="me-2" />
                  Ask AI
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 px-4 py-4">
            {activeTab === 'overview' && (
              <div>
                <h2 className="mb-4">Dashboard Overview</h2>
                
                {/* Stats Cards */}
                <div className="row mb-4">
                  <div className="col-md-3 mb-3">
                    <div className="card bg-primary text-white">
                      <div className="card-body">
                        <h5 className="card-title">Active Courses</h5>
                        <h3 className="mb-0">3</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="card bg-success text-white">
                      <div className="card-body">
                        <h5 className="card-title">Completed Videos</h5>
                        <h3 className="mb-0">24</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="card bg-warning text-white">
                      <div className="card-body">
                        <h5 className="card-title">Upcoming Tests</h5>
                        <h3 className="mb-0">3</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="card bg-info text-white">
                      <div className="card-body">
                        <h5 className="card-title">Doubts Resolved</h5>
                        <h3 className="mb-0">15</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="mb-0">Next Test</h5>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">{upcomingTests[0].subject}</h6>
                        <p className="card-text">{upcomingTests[0].topic}</p>
                        <div className="d-flex justify-content-between text-muted">
                          <span><Calendar size={16} className="me-1" />{upcomingTests[0].date}</span>
                          <span><Clock size={16} className="me-1" />{upcomingTests[0].time}</span>
                        </div>
                        <button className="btn btn-primary btn-sm mt-2">Prepare Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="mb-0">Continue Learning</h5>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">{courses[0].name}</h6>
                        <p className="card-text">Next: {courses[0].nextLesson}</p>
                        <div className="progress mb-2">
                          <div className="progress-bar" style={{width: `${courses[0].progress}%`}}></div>
                        </div>
                        <span className="text-muted">{courses[0].progress}% Complete</span>
                        <button className="btn btn-success btn-sm mt-2 d-block">Continue Course</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tests' && (
              <div>
                <h2 className="mb-4">Upcoming Tests</h2>
                <div className="row">
                  {upcomingTests.map(test => (
                    <div key={test.id} className="col-md-6 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{test.subject}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{test.topic}</h6>
                          <div className="mb-2">
                            <span className="badge bg-primary me-2">{test.date}</span>
                            <span className="badge bg-secondary me-2">{test.time}</span>
                            <span className="badge bg-info">{test.duration}</span>
                          </div>
                          <div className="d-flex gap-2">
                            <button className="btn btn-outline-primary btn-sm">Study Material</button>
                            <button className="btn btn-primary btn-sm">Start Test</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'doubts' && (
              <div>
                <h2 className="mb-4">Ask Doubts</h2>
                
                {/* Ask New Doubt */}
                <div className="card mb-4">
                  <div className="card-header">
                    <h5 className="mb-0">Ask a New Question</h5>
                  </div>
                  <div className="card-body">
                    <div>
                      <div className="mb-3">
                        <label className="form-label">Select Subject</label>
                        <select className="form-select">
                          <option>Mathematics</option>
                          <option>Physics</option>
                          <option>Chemistry</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Your Question</label>
                        <textarea 
                          className="form-control" 
                          rows="4" 
                          value={doubtText}
                          onChange={(e) => setDoubtText(e.target.value)}
                          placeholder="Type your question here..."
                        ></textarea>
                      </div>
                      <button onClick={handleDoubtSubmit} className="btn btn-primary">Submit Question</button>
                    </div>
                  </div>
                </div>

                {/* Recent Doubts */}
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Recent Questions</h5>
                  </div>
                  <div className="card-body">
                    {recentDoubts.map(doubt => (
                      <div key={doubt.id} className="border-bottom pb-3 mb-3">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <h6 className="mb-1">{doubt.question}</h6>
                            <span className="badge bg-secondary me-2">{doubt.subject}</span>
                            <span className="text-muted small">Asked on {doubt.askedOn}</span>
                          </div>
                          <span className={`badge ${doubt.status === 'answered' ? 'bg-success' : 'bg-warning'}`}>
                            {doubt.status === 'answered' ? <CheckCircle size={14} className="me-1" /> : <AlertCircle size={14} className="me-1" />}
                            {doubt.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'videos' && (
              <div>
                <h2 className="mb-4">Watched Videos</h2>
                <div className="row">
                  {watchedVideos.map(video => (
                    <div key={video.id} className="col-md-6 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{video.title}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{video.subject}</h6>
                          <div className="mb-2">
                            <span className="badge bg-info me-2">{video.duration}</span>
                            <span className="text-muted small">Watched on {video.watchedOn}</span>
                          </div>
                          <div className="progress mb-2">
                            <div className="progress-bar" style={{width: `${video.progress}%`}}></div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="text-muted">{video.progress}% Watched</span>
                            <button className="btn btn-outline-primary btn-sm">
                              {video.progress === 100 ? 'Rewatch' : 'Continue'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div>
                <h2 className="mb-4">Continue Your Courses</h2>
                <div className="row">
                  {courses.map(course => (
                    <div key={course.id} className="col-md-12 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="row align-items-center">
                            <div className="col-md-8">
                              <h5 className="card-title">{course.name}</h5>
                              <p className="card-text text-muted">Next Lesson: {course.nextLesson}</p>
                              <div className="progress mb-2">
                                <div className="progress-bar" style={{width: `${course.progress}%`}}></div>
                              </div>
                              <div className="d-flex justify-content-between text-muted">
                                <span>{course.completedLessons}/{course.totalLessons} lessons completed</span>
                                <span>{course.progress}% Complete</span>
                              </div>
                            </div>
                            <div className="col-md-4 text-end">
                              <button className="btn btn-primary">
                                Continue Learning <ChevronRight size={16} className="ms-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;