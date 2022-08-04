import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

export default function History() {
  return (
    <>
      <Header />
      <HistoryStyle>
        <HistoryHeader>
          <h2>Histórico</h2>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </HistoryHeader>
      </HistoryStyle>
      <Footer />
    </>
  )
}

const HistoryStyle = styled.div`
  width: 100%;
  min-height: calc(100vh - 180px);
  margin-top: 70px;
  padding: 30px 20px 0 20px;
`

const HistoryHeader = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

h2{
  color: #126BA5;
  font-size: 24px;
  margin-bottom: 20px;
}

p{
  color: #666666;
  font-size: 18px;
}
`