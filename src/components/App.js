import GlobalStyle from "../assets/globalStyle"
import LoginPage from "./LoginPage"
import Register from "./Register"
import Habits from "./Habits"
import Today from "./Today"
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/cadastro' element={<Register />} />
        <Route path='/hoje' element={<Today />} />
        <Route path='/habitos' element={<Habits />} />
      </Routes>
    </BrowserRouter>
  )
}