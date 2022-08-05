import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";


export default function Header() {
  const { userData } = useContext(UserContext);
  return (
    <HeaderStyled>
      <h1>TrackIt</h1>
      <img src={userData.image} alt='profile picture' />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
 width: 100vw;
 height: 70px;
 background-color: #126BA5;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 20px;
 box-shadow: 0 4px 4px rgba(0,0,0, 0.15);
 position: fixed;
 top: 0;
 left: 0;
 z-index: 1;

h1{
  font-family: Playball;
  font-size: 40px;
}

img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
`