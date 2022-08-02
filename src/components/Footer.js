import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyle>
      <h2>Hábitos</h2>
      <h2>Histórico</h2>
    </FooterStyle>
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
}
`