import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from '../assets/Logo.png'

export default function Login() {
  return (
    <Wrapper>
      <img src={Logo} alt='logo' />
      <input type='email' placeholder='email'></input>
      <input type='password' placeholder='senha'></input>
      <button>Entrar</button>
      <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
    </Wrapper >
  )
}

const Wrapper = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 img{
  width: 180px;
  height: 180px;
  margin-bottom: 30px;
 }

 input{
  width: 80%;
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

 button{
  width: 80%;
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
 }

 a{
  margin-top: 25px;
  color: #52B6FF;
  font-size: 14px;
 }
`