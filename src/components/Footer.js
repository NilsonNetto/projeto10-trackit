import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function Footer() {

  const navigate = useNavigate();

  return (
    <>
      <FooterStyle>
        <h2 onClick={() => navigate('/habitos')}>Hábitos</h2>
        <h2 onClick={() => navigate('/historico')}>Histórico</h2>
      </FooterStyle>
      <FooterMargin />
    </>
  )
}

const FooterStyle = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: white;
  position: fixed;
  bottom: 0;
  right: 0;

h2{
  color: #52B6FF;
  font-size: 22px;
  cursor: pointer;
}
`
const FooterMargin = styled.div`
width: 100vw;
height: 110px;
`