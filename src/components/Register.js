import { Link } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import Logo from '../assets/Logo.png'
import { SignUp } from '../services/trackit'

export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  function handleForm(e) {
    e.preventDefault();
    const body = {
      email,
      name,
      image,
      password
    }
    console.log(body)
    /* SignUp(body)
      .then(alert('cadastrado com sucesso'))
      .catch(alert('Erro no cadastro')) */;
  }

  return (
    <Wrapper>
      <img src={Logo} alt='logo' />
      <form onSubmit={(e) => handleForm(e)}>
        <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        <input type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        <input type='text' placeholder='nome' value={name} onChange={(e) => setName(e.target.value)} required></input>
        <input type='url' placeholder='foto' value={image} onChange={(e) => setImage(e.target.value)} required></input>
        <button>Cadastrar</button>
      </form>
      <Link to='/'>Já tem uma conta? Faça Login!</Link>
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
 }

 a{
  margin-top: 25px;
  color: #52B6FF;
  font-size: 14px;
 }
`