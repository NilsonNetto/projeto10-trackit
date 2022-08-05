import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { ListHabits } from "../services/trackit";
import Footer from "./Footer";
import Habit from "./Habit";
import Header from "./Header";
import Loading from "./Loading";


export default function Habits() {

  const { userData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [habitsList, setHabitsList] = useState([])
  const [updateHabits, setUpdateHabits] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`
      }
    }

    ListHabits(config)
      .then(res => {
        setHabitsList(res.data)
        setIsLoading(false)
      })
      .catch(res => {
        console.log(res.data)
        alert('Erro')
      })

  }, [updateHabits])

  return (
    isLoading ? (
      <Loading />
    ) : (
      <>
        <Header />
        <Wrapper>
          <HabitsHeader>
            <h3>Meus hábitos</h3>
            <button>+</button>
          </HabitsHeader>
          {habitsList.length === 0 ? (<p>Você não tem nenhum hábito cadastrado ainda.
            Adicione um hábito para começar a trackear!</p>) : (
            habitsList.map((habit) => <Habit key={habit.id} habitData={habit} updateHabits={updateHabits} setUpdateHabits={setUpdateHabits} />)
          )}
        </Wrapper>
        <Footer />
      </>
    )
  )
}

const Wrapper = styled.main`
  width: 100vw;
  min-height: calc(100vh - 180px);
  margin-top: 70px;
  padding: 30px 20px 0 20px;
`
const HabitsHeader = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

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