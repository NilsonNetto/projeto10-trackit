import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

export default function History() {
  return (
    <>
      <Header />
      <HistoryStyle>Eu ainda não tenho nada :sad:</HistoryStyle>
      <Footer />
    </>
  )
}

const HistoryStyle = styled.div`
  width: 100%;
  min-height: calc(100vh - 180px);
  margin-top: 70px;

`