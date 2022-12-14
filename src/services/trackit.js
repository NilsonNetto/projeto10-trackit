import axios from "axios";

const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function SignUp(body) {
  const promise = axios.post(`${URL}/auth/sign-up`, body)
  return promise;
}

function Login(body) {
  const promise = axios.post(`${URL}/auth/login`, body)
  return promise;
}

function CreateHabits(body, config) {
  const promise = axios.post(`${URL}/habits`, body, config)
  return promise;
}

function ListHabits(config) {
  const promise = axios.get(`${URL}/habits`, config)
  return promise;
}

function DeleteHabits(HabitId, config) {
  const promise = axios.delete(`${URL}/habits/${HabitId}`, config)
  return promise;
}

function HabitsToday(config) {
  const promise = axios.get(`${URL}/habits/today`, config)
  return promise;
}

function CheckHabit(HabitId, config) {
  const promise = axios.post(`${URL}/habits/${HabitId}/check`, {}, config)
  return promise;
}

function UncheckHabit(HabitId, config) {
  const promise = axios.post(`${URL}/habits/${HabitId}/uncheck`, {}, config)
  return promise;
}

function HabitsHistory() {
  const promise = axios.get(`${URL}/habits/history/daily`)
  return promise;
}
export { SignUp, Login, CreateHabits, ListHabits, DeleteHabits, HabitsToday, CheckHabit, UncheckHabit, HabitsHistory }