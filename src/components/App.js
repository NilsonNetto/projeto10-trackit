import GlobalStyle from "../assets/globalStyle"
import LoginPage from "./LoginPage"
import Register from "./Register"
import Habits from "./Habits"
import Today from "./Today"
import History from "./History"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserContext from "../contexts/UserContext"
import { useState } from "react"


export default function App() {

  const [userData, setUserData] = useState();

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/cadastro' element={<Register />} />
          <Route path='/hoje' element={<Today />} />
          <Route path='/habitos' element={<Habits />} />
          <Route path='/historico' element={<History />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}