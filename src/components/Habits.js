import styled from "styled-components";
import Footer from "./Footer";
import Habit from "./Habit";
import Header from "./Header";


export default function Habits() {
  return (
    <>
      <Header />
      <Wrapper>
        <HabitsHeader>
          <h3>Meus hábitos</h3>
          <button>+</button>
        </HabitsHeader>
        <p>Você não tem nenhum hábito cadastrado ainda.
          Adicione um hábito para começar a trackear!</p>
        <Habit />
        <Habit />
      </Wrapper>
      <Footer />
    </>
  )
}

const Wrapper = styled.main`
width: 100%;
height: 100%;
margin: 70px 0;
padding: 0 20px;
background-color: #F2F2F2;
font-size: 18px;
color: #666666 ;

h3{
  color: #126BA5;
  font-size: 23px;
}

button{
  width: 40px;
  height: 35px;
  font-size: 27px;
  color: white;
  background-color: #52B6FF;
  border: 1px solid #52B6FF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const HabitsHeader = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center
`