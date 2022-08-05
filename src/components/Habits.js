import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { CreateHabits, ListHabits } from "../services/trackit";
import Footer from "./Footer";
import Habit from "./Habit";
import Header from "./Header";
import Loading from "./Loading";


export default function Habits() {

  const { userData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [habitsList, setHabitsList] = useState([]);
  const [updateHabits, setUpdateHabits] = useState(false);
  const [showNewHabit, setShowNewHabit] = useState(false);
  const [newHabitName, setNewHabitName] = useState('');

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

  function saveNewHabit() {
    console.log('entrou novo habito');
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`
      }
    }

    CreateHabits(config)
      .then(res => {
        console.log(res.data);
        setUpdateHabits(!updateHabits);
      })
      .catch(res => {
        console.log(res.data);
        alert('Erro');
      })
  }


  return (
    isLoading ? (
      <Loading />
    ) : (
      <>
        <Header />
        <Wrapper>
          <HabitsHeader>
            <h3>Meus hábitos</h3>
            <button onClick={() => setShowNewHabit(true)}>+</button>
          </HabitsHeader>
          <NewHabitStyle show={showNewHabit}>
            <input type='text' placeholder='Nome do hábito' value={newHabitName} onChange={(e) => setNewHabitName(e.target.value)} />
            <div>
              <p onClick={() => setShowNewHabit(false)}>Cancelar</p>
              <button onClick={saveNewHabit}>Salvar</button>
            </div>
          </NewHabitStyle>
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

p {
 font-size: 18px;
 color: #666666;
 margin-top: 20px;
}
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
  cursor: pointer;
}
`

const NewHabitStyle = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  width: 100%;
  height: 180px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  position: relative;

input{
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #D4D4D4;
  padding: 0 10px;
  font-size: 20px;
  color: #666666;
}

div{
  height: 35px;
  display: flex;
  gap: 25px;
  position: absolute;
  bottom: 20px;
  right: 20px;
}

p{
  font-size: 16px;
  color: #52B6FF;
  cursor: pointer;
  margin: auto;
}

 button{
  width: 85px;
  height: 35px;
  border-radius: 5px;
  background-color: #52B6FF;
  border: 1px solid #52B6FF;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
`