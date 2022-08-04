import styled from "styled-components"
import { FaTrashAlt } from 'react-icons/fa'
import Loading from "./Loading"
import { useState } from "react"

export default function Habit() {
  const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S',]

  return (
    <HabitWrapper>
      <div>
        <span>Let 1 capítulo de livro</span>
        <FaTrashAlt />
      </div>
      <DayList>
        {weekdays.map((day, index) => <div key={index}>{day}</div>)}
      </DayList>
    </HabitWrapper>
  )
}

const HabitWrapper = styled.div`
  width: 100%;
  height: 90px;
  margin: 10px 0;
  padding: 15px;
  background-color: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

 div{
  width: 100%;
  display: flex;
  gap: 5px;
 } 

 span{
  font-size: 20px;
  color: #666666;
 }

 svg{
  width: 13px;
  height: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
 }
`
const DayList = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;

div{
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #D4D4D4;
  color: #DBDBDB;
  font-size: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

`