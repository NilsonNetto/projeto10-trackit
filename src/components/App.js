import GlobalStyle from "../assets/globalStyle"
import Login from "./Login"
import Register from "./Register"
import Habits from "./Habits"
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Register />} />
        <Route path='/habitos' element={<Habits />} />
      </Routes>
    </BrowserRouter>
  )
}