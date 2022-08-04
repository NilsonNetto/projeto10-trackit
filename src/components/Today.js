import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext"
import Footer from "./Footer"
import Header from "./Header"
import Task from "./Task"
import { HabitsToday } from "../services/trackit"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import ProgressContext from "../contexts/ProgressContext"

export default function Today() {

  const { userData } = useContext(UserContext);
  const { setProgressData } = useContext(ProgressContext);
  const [tasksData, setTasksData] = useState([]);
  const [updateTasks, setUpdateTasks] = useState(false)

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`
      }
    }

    HabitsToday(config)
      .then(res => {
        setTasksData(res.data)
        updateProgress(res.data)
      })
      .catch(res => {
        console.log(res.data)
        alert('Erro')
      })

  }, [updateTasks])

  function updateProgress(tasksData) {
    let tasksDone = 0
    tasksDone = (tasksData.filter(task => task.done)).length / tasksData.length
    setProgressData(tasksDone);
  }

  return (
    <>
      <Header />
      <TodayStyle>
        <TodayHeader>
          <h2>{dayjs().locale('pt-br').format('dddd')}, {dayjs().format('DD/MM')}</h2>
          <p>Nenhum hábito concluido ainda</p>
        </TodayHeader>

        {tasksData.length === 0 ? '' : (
          tasksData.map(task => <Task key={task.id} taskData={task} updateTasks={updateTasks} setUpdateTasks={setUpdateTasks} />)
        )}

      </TodayStyle>
      <Footer />
    </>
  )
}

const TodayStyle = styled.div`
  width: 100%;
  min-height: calc(100vh - 180px);
  margin-top: 70px;
  padding: 30px 20px 0 20px;
`

const TodayHeader = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

h2{
  color: #126BA5;
  font-size: 24px;
  margin-bottom: 5px;
}

p{
  color: #BABABA;
  font-size: 18px;
}

`