import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";
import { useContext } from "react";
import ProgressContext from "../contexts/ProgressContext";

export default function Footer() {

  const { progressData } = useContext(ProgressContext)
  const navigate = useNavigate();

  return (
    <>
      <FooterStyle>
        <h2 onClick={() => navigate('/habitos')}>Hábitos</h2>
        <ProgressBar onClick={() => navigate('/hoje')}>
          <CircularProgressbar value={progressData} text={'Hoje'}
            background
            backgroundPadding={6}
            strokeWidth={8}
            styles={buildStyles(
              {
                pathTransitionDuration: 0.5,
                backgroundColor: "#52B6FF",
                textColor: "#FFFFFF",
                pathColor: "#FFFFFF",
                trailColor: "transparent"
              })} />
        </ProgressBar>
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
const ProgressBar = styled.div`
width: 90px;
height: 90px;
margin-bottom: 35px;
color: white;
cursor: pointer;
`