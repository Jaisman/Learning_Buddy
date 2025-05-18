import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  IconButton,
  Drawer,
  TextField,
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@mui/material';
import {
  School as SchoolIcon,
  Person as PersonIcon,
  Chat as ChatIcon,
  Close as CloseIcon,
  Send as SendIcon,
  Add as AddIcon,
  Assignment as AssignmentIcon,
  Group as GroupIcon,
  Assessment as AssessmentIcon,
} from '@mui/icons-material';

const TeacherPortal = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  // Mock teacher data
  const teacherData = {
    name: 'Dr. Sarah Wilson',
    department: 'Computer Science',
    designation: 'Associate Professor',
    avatar: 'https://i.pravatar.cc/150?img=5',
  };

  // Mock class data
  const classes = [
    { id: 1, name: 'Data Structures', students: 45, progress: 75 },
    { id: 2, name: 'Algorithms', students: 38, progress: 60 },
    { id: 3, name: 'Database Systems', students: 42, progress: 85 },
  ];

  // Mock student list
  const students = [
    { id: 1, name: 'John Doe', class: 'Data Structures', progress: 85, attendance: 92 },
    { id: 2, name: 'Jane Smith', class: 'Algorithms', progress: 78, attendance: 88 },
    { id: 3, name: 'Mike Johnson', class: 'Database Systems', progress: 92, attendance: 95 },
  ];

  // Mock assignments
  const assignments = [
    { id: 1, title: 'Binary Tree Implementation', class: 'Data Structures', dueDate: '2024-03-15', submissions: 38 },
    { id: 2, title: 'Sorting Algorithms Analysis', class: 'Algorithms', dueDate: '2024-03-20', submissions: 32 },
    { id: 3, title: 'Database Design Project', class: 'Database Systems', dueDate: '2024-03-25', submissions: 40 },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { text: message, sender: 'user' }]);
      // Here you would typically make an API call to your chatbot
      setTimeout(() => {
        setChatHistory(prev => [...prev, { text: `Echo: ${message}`, sender: 'bot' }]);
      }, 1000);
      setMessage('');
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <Paper elevation={3} sx={{ p: 2, mb: 3, bgcolor: 'primary.main', color: 'white' }}>
        <Container>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Avatar src={teacherData.avatar} sx={{ width: 56, height: 56 }} />
            </Grid>
            <Grid item xs>
              <Typography variant="h5">{teacherData.name}</Typography>
              <Typography variant="body2">
                {teacherData.designation} • {teacherData.department}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton color="inherit" onClick={() => setChatOpen(true)}>
                <ChatIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* Main Content */}
      <Container>
        <Grid container spacing={3}>
          {/* Quick Stats */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Total Students
                    </Typography>
                    <Typography variant="h3" color="primary">
                      125
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Active Classes
                    </Typography>
                    <Typography variant="h3" color="primary">
                      3
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Main Content Area */}
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
                <Tab icon={<GroupIcon />} label="Classes" />
                <Tab icon={<AssignmentIcon />} label="Assignments" />
                <Tab icon={<AssessmentIcon />} label="Analytics" />
              </Tabs>

              {/* Classes Tab */}
              {activeTab === 0 && (
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Class Name</TableCell>
                        <TableCell align="right">Students</TableCell>
                        <TableCell align="right">Progress</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {classes.map((classItem) => (
                        <TableRow key={classItem.id}>
                          <TableCell>{classItem.name}</TableCell>
                          <TableCell align="right">{classItem.students}</TableCell>
                          <TableCell align="right">{classItem.progress}%</TableCell>
                          <TableCell align="right">
                            <Button size="small" variant="outlined">
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}

              {/* Assignments Tab */}
              {activeTab === 1 && (
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <Button
                      variant="contained"
                      startIcon={<AddIcon />}
                      color="primary"
                    >
                      New Assignment
                    </Button>
                  </Box>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Title</TableCell>
                          <TableCell>Class</TableCell>
                          <TableCell>Due Date</TableCell>
                          <TableCell align="right">Submissions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {assignments.map((assignment) => (
                          <TableRow key={assignment.id}>
                            <TableCell>{assignment.title}</TableCell>
                            <TableCell>{assignment.class}</TableCell>
                            <TableCell>{assignment.dueDate}</TableCell>
                            <TableCell align="right">{assignment.submissions}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}

              {/* Analytics Tab */}
              {activeTab === 2 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Student Performance Overview
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Student</TableCell>
                          <TableCell>Class</TableCell>
                          <TableCell align="right">Progress</TableCell>
                          <TableCell align="right">Attendance</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {students.map((student) => (
                          <TableRow key={student.id}>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.class}</TableCell>
                            <TableCell align="right">
                              <Chip
                                label={`${student.progress}%`}
                                color={student.progress >= 80 ? 'success' : 'warning'}
                                size="small"
                              />
                            </TableCell>
                            <TableCell align="right">
                              <Chip
                                label={`${student.attendance}%`}
                                color={student.attendance >= 90 ? 'success' : 'warning'}
                                size="small"
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Chatbot Drawer */}
      <Drawer
        anchor="right"
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        PaperProps={{
          sx: { width: 400, p: 2 },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">Teaching Assistant</Typography>
          <IconButton onClick={() => setChatOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ height: 'calc(100vh - 180px)', overflowY: 'auto', mb: 2 }}>
          {chatHistory.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                mb: 1,
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: 1,
                  maxWidth: '80%',
                  bgcolor: msg.sender === 'user' ? 'primary.main' : 'grey.100',
                  color: msg.sender === 'user' ? 'white' : 'text.primary',
                }}
              >
                <Typography variant="body1">{msg.text}</Typography>
              </Paper>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default TeacherPortal; 