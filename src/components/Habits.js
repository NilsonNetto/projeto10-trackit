import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";


export default function Habits() {
  return (
    <>
      <Header />
      <Wrapper>
        <p>TEsteee</p>
        <p>TEsteee</p>
        <p>TEsteee</p>
        <p>TEsteee</p>
        <p>TEsteee</p>
        <p>TEsteee</p>
        <p>TEsteee</p>
        <p>TEsteee</p>
        <p>TEsteee</p>
        <p>TEsteee</p>
        <p>TEsteee</p>
        <p>TEsteee</p>
        <p>TEsteee</p>
      </Wrapper>
      <Footer />
    </>
  )
}

const Wrapper = styled.div`
width: 100%;
margin: 70px 0;
background-color: #F2F2F2;

p{
  height: 50px;
  margin-bottom: 50px;
}
`