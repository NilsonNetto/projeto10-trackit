import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import Task from "./Task"

export default function Today() {

  return (
    <>
      <Header />
      <TodayStyle>
        <TodayHeader>
          <h2>Segunda, 17/01</h2>
          <p>Nenhum hábito concluido ainda</p>
        </TodayHeader>

        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />

      </TodayStyle>
      <Footer />
    </>
  )
}

const TodayStyle = styled.div`
      width: 100%;
      height: 100%;
      min-height: calc(100vh - 140px);
      background-color: #F2F2F2;
      margin: 70px 0;
      padding: 30px 20px 0 20px;
      `

const TodayHeader = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

h2{
  color: #126BA5;
  font-size: 24px;
  margin-bottom: 5px;
}

p{
  color: #BABABA;
  font-size: 18px;
}

`