import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User, Mail, Phone, Calendar, BookOpen, Award,  Camera, Edit3, Save, Bell} from 'lucide-react';

const StudentProfile = () => {
      const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: '',
    enrollmentDate: ''
  });


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const userId = localStorage.getItem('userId');
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const resp = await axios.get(`http://localhost:8000/user/profile/${userId}`);
        setProfileData({
          firstName: resp.data.firstName,
          lastName: resp.data.lastName,
          email: resp.data.email,
          phone: resp.data.phoneNumber,
          grade: resp.data.educationLevel
        });
      } catch (error) {
        console.error(error);
        setError('Failed to load profile.');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchProfile();
    }
  }, [userId]);

 
  const handleUpdate = async()=>{
    try {
      await axios.put(`http://localhost:8000/user/update_profile/${userId}`),{
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        email: profileData.email,
        phoneNumber: profileData.phoneNumber,
        educationLevel: profileData.grade
      };
      alert("Profile updated successfully!");

    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
    setIsEditing(!isEditing);
  }

  const academicStats = {
    totalCourses: 6,
    completedCourses: 2,
    averageScore: 85.5,
    totalTestsTaken: 24,
    currentStreak: 7,
    totalStudyHours: 142
  };

  const achievements = [
    { id: 1, title: 'First Test Completed', icon: '🎯', date: '2024-01-20' },
    { id: 2, title: 'Math Wizard', icon: '🔢', date: '2024-02-15' },
    { id: 3, title: '7-Day Streak', icon: '🔥', date: '2024-03-01' },
    { id: 4, title: 'Science Explorer', icon: '🔬', date: '2024-03-10' },
    { id: 5, title: 'Fast Learner', icon: '⚡', date: '2024-04-05' }
  ];

  const recentActivity = [
    { id: 1, activity: 'Completed Chapter 5: Integration', course: 'Mathematics', date: '2025-05-18' },
    { id: 2, activity: 'Scored 92% in Physics Test', course: 'Physics', date: '2025-05-17' },
    { id: 3, activity: 'Asked doubt about Organic Reactions', course: 'Chemistry', date: '2025-05-16' },
    { id: 4, activity: 'Watched video: Quantum Mechanics', course: 'Physics', date: '2025-05-15' }
  ];



  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };
const initials = `${profileData.firstName.charAt(0)}${profileData.lastName.charAt(0)}`;
  

  return (
    <div className="min-vh-100 bg-light">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">EduAssist</span>
          <div className="navbar-nav ms-auto d-flex flex-row">
            
            <div className="nav-item">
              <button className="btn btn-outline-light" style={{paddingBottom:0}} onClick={()=>{navigate('/StudentDashboard')}}>
                <p className='p-0'>Back to Dashboard</p>
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
                  className={`list-group-item list-group-item-action border-0 ${activeTab === 'personal' ? 'active' : ''}`}
                  onClick={() => setActiveTab('personal')}
                >
                  <User size={18} className="me-2" />
                  Personal Info
                </button>
                <button 
                  className={`list-group-item list-group-item-action border-0 ${activeTab === 'academic' ? 'active' : ''}`}
                  onClick={() => setActiveTab('academic')}
                >
                  <BookOpen size={18} className="me-2" />
                  Academic Progress
                </button>
                <button 
                  className={`list-group-item list-group-item-action border-0 ${activeTab === 'achievements' ? 'active' : ''}`}
                  onClick={() => setActiveTab('achievements')}
                >
                  <Award size={18} className="me-2" />
                  Achievements
                </button>
                <button 
                  className={`list-group-item list-group-item-action border-0 ${activeTab === 'activity' ? 'active' : ''}`}
                  onClick={() => setActiveTab('activity')}
                >
                  <Calendar size={18} className="me-2" />
                  Recent Activity
                </button>
                
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 px-4 py-4">
            {activeTab === 'personal' && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2>Personal Information</h2>
                  <button 
                    className={`btn ${isEditing ? 'btn-success' : 'btn-primary'}`}
                    onClick={handleUpdate}
                  >
                    {isEditing ? (
                      <>
                        <Save size={18} className="me-1" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <Edit3 size={18} className="me-1" />
                        Edit Profile
                      </>
                    )}
                  </button>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <div className="card">
                      <div className="card-body">
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="form-label">First Name</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              value={profileData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Last Name</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              value={profileData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              disabled={!isEditing}
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            value={profileData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            disabled={!isEditing}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <input 
                            type="tel" 
                            className="form-control" 
                            value={profileData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            disabled={!isEditing}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Grade</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            value={profileData.grade}
                            onChange={(e) => handleInputChange('grade', e.target.value)}
                            disabled={!isEditing}
                          />
                        </div>
                        

                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="position-relative d-inline-block mb-3">
                          <div
                        className="initials-avatar rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                        width: '70px',
                        height: '70px',
                        backgroundColor: '#3366FF',
                        color: '#FFF',
                        fontSize: '2.5rem',
                        fontWeight: '600',
                        }}
                        >
                        {initials}
                        </div>
                          {isEditing && (
                            <button className="btn btn-primary btn-sm position-absolute bottom-0 end-0 rounded-circle">
                              <Camera size={16} />
                            </button>
                          )}
                        </div>
                        <h5>{profileData.firstName} {profileData.lastName}</h5>
                        <p className="text-muted">{profileData.grade}</p>
                        <p className="text-muted">{profileData.institution}</p>
                        
                        <hr />
                        <div className="text-start">
                          <p><Mail size={16} className="me-2" />{profileData.email}</p>
                          <p><Phone size={16} className="me-2" />{profileData.phone}</p>
                         
                          <p><Calendar size={16} className="me-2" />Enrolled: {profileData.enrollmentDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'academic' && (
              <div>
                <h2 className="mb-4 text-center">Academic Progress</h2>
                
                {/* Stats Cards */}
                <div className="row mb-4">
                  <div className="col-md-4 mb-3">
                    <div className="card bg-primary text-white">
                      <div className="card-body">
                        <h5 className="card-title">Total Courses</h5>
                        <h3 className="mb-0">{academicStats.totalCourses}</h3>
                        <small>{academicStats.completedCourses} Completed</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card bg-success text-white">
                      <div className="card-body">
                        <h5 className="card-title">Average Score</h5>
                        <h3 className="mb-0">{academicStats.averageScore}%</h3>
                        <small>{academicStats.totalTestsTaken} Tests Taken</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card bg-warning text-white">
                      <div className="card-body">
                        <h5 className="card-title">Study Streak</h5>
                        <h3 className="mb-0">{academicStats.currentStreak} Days</h3>
                        <small>{academicStats.totalStudyHours} Total Hours</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Progress */}
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Course Progress</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Mathematics</span>
                        <span>85%</span>
                      </div>
                      <div className="progress mb-2">
                        <div className="progress-bar bg-success" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Physics</span>
                        <span>72%</span>
                      </div>
                      <div className="progress mb-2">
                        <div className="progress-bar bg-info" style={{width: '72%'}}></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Chemistry</span>
                        <span>68%</span>
                      </div>
                      <div className="progress mb-2">
                        <div className="progress-bar bg-warning" style={{width: '68%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <h2 className="mb-4 text-center">Achievements</h2>
                <div className="row">
                  {achievements.map(achievement => (
                    <div key={achievement.id} className="col-md-6 col-lg-4 mb-3">
                      <div className="card h-100">
                        <div className="card-body text-center">
                          <div className="mb-3" style={{fontSize: '3rem'}}>
                            {achievement.icon}
                          </div>
                          <h5 className="card-title">{achievement.title}</h5>
                          <p className="text-muted small">Earned on {achievement.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div>
                <h2 className="mb-4 text-center">Recent Activity</h2>
                <div className="card">
                  <div className="card-body">
                    {recentActivity.map(activity => (
                      <div key={activity.id} className="border-bottom pb-3 mb-3">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h6 className="mb-1">{activity.activity}</h6>
                            <small className="text-muted">{activity.course}</small>
                          </div>
                          <small className="text-muted">{activity.date}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;