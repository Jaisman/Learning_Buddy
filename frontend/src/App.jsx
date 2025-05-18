import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import About from "./components/About"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
