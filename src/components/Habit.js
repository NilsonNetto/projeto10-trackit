import styled from "styled-components"
import { FaTrashAlt } from 'react-icons/fa'
import { useContext, useState } from "react"
import { DeleteHabits } from "../services/trackit"
import UserContext from "../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"


export default function Habit({ habitData, updateHabits, setUpdateHabits, weekdays }) {

  const { name, days, id } = habitData;
  const { userData } = useContext(UserContext);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const selectedDays = weekdays.map((day, index) => days.includes(index) ? (
    { ...day, selected: true }
  ) : (
    { ...day })
  );

  function deleteHabit() {
    const confirmation = window.confirm('Você deseja deletar este hábito?')
    setDeleteLoading(!deleteLoading)
    if (confirmation) {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`
        }
      }

      DeleteHabits(id, config)
        .then(res => {
          setUpdateHabits(!updateHabits)
          setDeleteLoading(!deleteLoading)
        })
        .catch(res => {
          console.log(res.data)
          alert('Erro');
          setDeleteLoading(!deleteLoading)
        })
    }
  }

  return (
    <HabitStyle>
      {deleteLoading ? (
        <ThreeDots height={15} color='#52B6FF' />
      ) : (
        <>
          <HabitHeader>
            <span>{name}</span>
            <FaTrashAlt onClick={deleteHabit} />
          </HabitHeader>
          <DayList>
            {selectedDays.map((day, index) => <HabitDay key={index} selected={day.selected}>{day.name}</HabitDay>)}
          </DayList>
        </>
      )}
    </HabitStyle>
  )
}

const HabitStyle = styled.div`
  width: 100%;
  min-height: 90px;
  margin: 10px 0;
  padding: 15px;
  background-color: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const HabitHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  margin-bottom: 10px;

 span{
  width: 95%;
  font-size: 20px;
  color: #666666;
 }

svg{
 width: 13px;
 height: 15px;
 color: #666666;
 position: absolute;
 top: 15px;
 right: 15px;
 cursor: pointer;
}
`

const DayList = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
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
`