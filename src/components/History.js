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
  height: 100%;
  min-height: calc(100vh - 140px);
  margin: 70px 0;

`