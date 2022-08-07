import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"
import Logo from '../assets/Logo.png'
import { Login } from "../services/trackit"
import UserContext from "../contexts/UserContext"

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUserData } = useContext(UserContext)
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    setLoading(true);

    const body = {
      email,
      password
    }
    Login(body)
      .then(res => {
        setUserData(res.data);
        setLoading(false);
        navigate('/hoje')
      })
      .catch(res => {
        console.log(res.data);
        setLoading(false);
        alert('Email ou senha incorretos');
      })
  }

  return (
    <Wrapper>
      <img src={Logo} alt='logo' />
      <form onSubmit={(e) => handleForm(e)}>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <input type='password'
          placeholder='senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />

        <button disabled={loading}>{loading ? <ThreeDots height={13} color='white' /> : 'Entrar'}</button>
      </form>
      <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
    </Wrapper >
  )
}

const Wrapper = styled.div`
 width: 100vw;
 height: 100vh;
 background-color: white;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 img{
  width: 180px;
  height: 180px;
  margin-bottom: 30px;
 }

 form{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }

 input{
  width: 100%;
  max-width: 400px;
  height: 45px;
  padding-left: 10px;
  border: 1.5px solid #D4D4D4;
  border-radius: 5px;
  font-size: 20px;
  margin-bottom: 5px;
 }

 input::placeholder{
  color: #DBDBDB;
 }

 input:disabled{
  background-color: #F2F2F2;
 }

 button{
  width: 100%;
  max-width: 400px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #52B6FF;
  font-size: 20px;
  color: white;
  border: 1px solid #52B6FF;
  border-radius: 5px;
  cursor: pointer;
 }

 a{
  margin-top: 25px;
  color: #52B6FF;
  font-size: 14px;
 }
`