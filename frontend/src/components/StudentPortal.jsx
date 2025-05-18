import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  LinearProgress,
  Card,
  CardContent,
  IconButton,
  Drawer,
  TextField,
  Button,
} from '@mui/material';
import {
  School as SchoolIcon,
  Person as PersonIcon,
  Chat as ChatIcon,
  Close as CloseIcon,
  Send as SendIcon,
} from '@mui/icons-material';

const StudentPortal = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  // Mock student data - replace with actual data from your backend
  const studentData = {
    name: 'John Doe',
    college: 'University of Technology',
    branch: 'Computer Science',
    semester: '6th',
    avatar: 'https://i.pravatar.cc/150?img=1',
  };

  // Mock course progress data
  const courseProgress = [
    { name: 'Data Structures', progress: 75 },
    { name: 'Algorithms', progress: 60 },
    { name: 'Database Systems', progress: 85 },
    { name: 'Web Development', progress: 90 },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { text: message, sender: 'user' }]);
      // Here you would typically make an API call to your chatbot
      // For now, we'll just echo the message
      setTimeout(() => {
        setChatHistory(prev => [...prev, { text: `Echo: ${message}`, sender: 'bot' }]);
      }, 1000);
      setMessage('');
    }
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <Paper elevation={3} sx={{ p: 2, mb: 3, bgcolor: 'primary.main', color: 'white' }}>
        <Container>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Avatar src={studentData.avatar} sx={{ width: 56, height: 56 }} />
            </Grid>
            <Grid item xs>
              <Typography variant="h5">{studentData.name}</Typography>
              <Typography variant="body2">
                {studentData.college} • {studentData.branch} • Semester {studentData.semester}
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
          {/* Course Progress */}
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Course Progress
              </Typography>
              {courseProgress.map((course, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {course.name}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={course.progress}
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                  <Typography variant="body2" color="text.secondary" align="right">
                    {course.progress}%
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* Quick Stats */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Overall Progress
                    </Typography>
                    <Typography variant="h3" color="primary">
                      77.5%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Next Assignment
                    </Typography>
                    <Typography variant="body1">
                      Data Structures Project
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Due in 3 days
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
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
          <Typography variant="h6">Learning Assistant</Typography>
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

export default StudentPortal; 