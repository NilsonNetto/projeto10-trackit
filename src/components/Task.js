import styled from "styled-components"
import { FaCheck } from "react-icons/fa"

export default function Task({ taskData }) {

  const { name, done, currentSequence, highestSequence } = taskData;
  return (
    <TaskStyle>
      <TaskText>
        <h4>{name}</h4>
        <p>Sequência atual: {currentSequence} dias</p>
        <p>Seu recorde: {highestSequence} dias</p>
      </TaskText>
      <TaskButton>
        <FaCheck />
      </TaskButton>
    </TaskStyle>
  )
}

const TaskStyle = styled.div`
  width: 100%;
  max-width: 500px;
  height: 95px;
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
  color: #666666;
  font-size: 20px;

h4{
  margin-bottom: 7px;
}

p{
  font-size: 12px;
}

`
const TaskButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.done ? '#8FC549' : '#EBEBEB')};
  width: 70px;
  height: 70px;
  border-radius: 5px;
  font-size: 40px;
  color: white;

`