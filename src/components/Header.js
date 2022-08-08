import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { FaSignOutAlt } from "react-icons/fa"


export default function Header() {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  function changeAccount() {

    const confirmation = window.confirm('Você deseja alterar o usuário?')
    if (confirmation) {
      setUserData(undefined);
      localStorage.removeItem('loginData');
      navigate('/');
    }
  }

  return (
    <HeaderStyled>
      <h1>TrackIt</h1>
      <HeaderAccount>
        <div>
          <FaSignOutAlt onClick={changeAccount} />
        </div>
        <img src={userData.image} alt='profile' />
      </HeaderAccount>
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
`

const HeaderAccount = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;

div{
font-size: 25px;
line-height: 25px;
cursor: pointer;
}

img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
`