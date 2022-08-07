import styled from "styled-components"
import { FaCheck } from "react-icons/fa"
import { CheckHabit, UncheckHabit } from "../services/trackit";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Task({ taskData, updateTasks, setUpdateTasks }) {

  const { id, name, done, currentSequence, highestSequence } = taskData;
  const isHighest = currentSequence === highestSequence;
  const { userData } = useContext(UserContext);

  function toggleTask() {

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`
      }
    }

    if (done) {
      UncheckHabit(id, config)
        .then(res => {
          setUpdateTasks(!updateTasks)
        })
        .catch(res => {
          alert('Error', id)
        })
    } else {
      CheckHabit(id, config)
        .then(res => {
          setUpdateTasks(!updateTasks)
        })
        .catch(res => {
          alert('Error', id)
        })
    }
  }

  return (
    <TaskStyle >
      <TaskText>
        <h4>{name}</h4>
        <p>Sequência atual: <CurrentSequenceStyle isdone={done}>{currentSequence} dias</CurrentSequenceStyle></p>
        <p>Seu recorde: <HighestSequenceStyle isHighest={isHighest} isdone={done}>{highestSequence} dias</HighestSequenceStyle></p>
      </TaskText>
      <TaskButton isdone={done} onClick={toggleTask}>
        <FaCheck />
      </TaskButton>
    </TaskStyle>
  )
}

const TaskStyle = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 95px;
  display: flex;
  flex-direction: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  margin: 10px auto;
`

const TaskText = styled.div`
  max-width: calc(100% - 80px);
  color: #666666;
  font-size: 20px;

h4{
  margin-bottom: 7px;
}

p{
  font-size: 13px;
}
`
const TaskButton = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isdone ? '#8FC549' : '#EBEBEB')};
  border-radius: 5px;
  font-size: 40px;
  color: white;
  cursor: pointer;

`
const CurrentSequenceStyle = styled.span`
  color: ${(props) => (props.isdone ? '#8FC549' : '#666666')};
`

const HighestSequenceStyle = styled.span`
  color: ${(props) => (props.isHighest && props.isdone ? '#8FC549' : '#666666')};
`