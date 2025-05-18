import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import StudentPortal from './components/StudentPortal';
import TeacherPortal from './components/TeacherPortal';
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import About from "./components/About"
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
      light: '#42a5f5',
      dark: '#1565c0',
    },
    background: {
      default: '#ffffff', // White
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/about" element={<About/>}/>
          <Route path="/student/*" element={<StudentPortal />} />
          <Route path="/teacher/*" element={<TeacherPortal />} />
          <Route path="/" element={<StudentPortal />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
