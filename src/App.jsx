import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import HomePage from "./HomePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
