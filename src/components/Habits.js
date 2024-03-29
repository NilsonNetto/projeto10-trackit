import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { CreateHabits, ListHabits } from "../services/trackit";
import Footer from "./Footer";
import Habit from "./Habit";
import Header from "./Header";
import Loading from "./Loading";
import { weekdays } from "./weekdays"


export default function Habits() {

  const { userData, setUserData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [newHabitLoading, setNewHabitLoading] = useState(false);
  const [habitsList, setHabitsList] = useState([]);
  const [updateHabits, setUpdateHabits] = useState(false);
  const [showNewHabit, setShowNewHabit] = useState(false);
  const [newHabitName, setNewHabitName] = useState('');
  const [selectedDays, setSelectedDays] = useState(weekdays);

  useEffect(() => {
    const savedLogin = localStorage.getItem('loginData')
    const savedUserData = JSON.parse(savedLogin);
    if (savedLogin !== null) {
      setUserData(savedUserData);
    }
  }, [])

  useEffect(() => {
    if (userData !== undefined) {
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
    }
  }, [updateHabits, userData])

  function saveNewHabit() {

    setNewHabitLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`
      }
    }

    const APIDays = selectedDays.filter((day) => day.selected ? (day) : '')

    const body = {
      name: newHabitName,
      days: APIDays.map((day) => day.id)
    }

    if (APIDays.length === 0) {
      alert('Selecione pelo menos um dia');
      setNewHabitLoading(false);
      return;
    } else {
      CreateHabits(body, config)
        .then(res => {
          setUpdateHabits(!updateHabits);
          setNewHabitName('');
          setSelectedDays(weekdays);
          setShowNewHabit(false);
          setNewHabitLoading(false);
        })
        .catch(res => {
          console.log(res.data);
          alert('Erro ao cadastrar hábito');
          setNewHabitLoading(false);
        })
    }
  }

  function selectDay(selectedId, selected) {

    setSelectedDays(selectedDays.map((date, index) => index === selectedId ? (
      { ...date, selected: !selected }
    ) : (
      { ...date })
    ));
  }

  return (
    isLoading ? (
      <Loading />
    ) : (
      <>
        <Header />
        <HabitsStyle>
          <HabitsHeader>
            <h3>Meus hábitos</h3>
            <button onClick={() => setShowNewHabit(true)}>+</button>
          </HabitsHeader>
          <NewHabitStyle show={showNewHabit} isSaving={newHabitLoading}>
            <input type='text'
              placeholder='Nome do hábito'
              value={newHabitName}
              disabled={newHabitLoading}
              onChange={(e) => setNewHabitName(e.target.value)} />
            <DayList>
              {selectedDays.map((day) => <HabitDay key={day.id} selected={day.selected} onClick={() => selectDay(day.id, day.selected)}>{day.name}</HabitDay>)}
            </DayList>
            <SaveButton>
              <p onClick={() => setShowNewHabit(false)}>Cancelar</p>
              <button onClick={saveNewHabit}>{newHabitLoading ? <ThreeDots height={13} color='white' /> : 'Salvar'}</button>
            </SaveButton>
          </NewHabitStyle>
          {habitsList.length === 0 ? (<p>Você não tem nenhum hábito cadastrado ainda.
            Adicione um hábito para começar a trackear!</p>) : (
            habitsList.map((habit) => <Habit key={habit.id} weekdays={weekdays} habitData={habit} updateHabits={updateHabits} setUpdateHabits={setUpdateHabits} />)
          )}
        </HabitsStyle>
        <Footer />
      </>
    )
  )
}

const HabitsStyle = styled.main`
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
  font-size: 28px;
  padding-bottom: 7px;
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
  flex-direction: column;
  pointer-events: ${props => props.isSaving ? 'none' : 'auto'};

input{
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #D4D4D4;
  padding: 0 10px;
  font-size: 20px;
  color: #666666;
  margin-bottom: 10px;
}

input:disabled{
  background-color: #F2F2F2;
}
`
const DayList = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`
const HabitDay = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #D4D4D4;
  color: ${(props) => (props.selected ? '#FFFFFF' : '#DBDBDB')};
  font-size: 20px;
  background-color: ${(props) => (props.selected ? '#CFCFCF' : '#FFFFFF')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const SaveButton = styled.div`
  height: 35px;
  display: flex;
  gap: 25px;
  position: absolute;
  bottom: 20px;
  right: 20px;

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
  display: flex;
  justify-content: center;
  align-items: center;
}
`