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

function CreateHabits(body) {
  const promise = axios.post(`${URL}/habits`, body)
  return promise;
}

function ListHabits() {
  const promise = axios.get(`${URL}/habits`)
  return promise;
}

/* function DeleteHabits() {
  const promise = 
  return promise;
} */

function HabitsToday() {
  const promise = axios.get(`${URL}/habits/today`)
  return promise;
}

function HabitsDone(HabitId) {
  const promise = axios.post(`${URL}/habits/${HabitId}/check`)
  return promise;
}

function HabitsNotDone(HabitId) {
  const promise = axios.post(`${URL}/habits/${HabitId}/uncheck`)
  return promise;
}

function HabitsHistory() {
  const promise = axios.get(`${URL}/habits/history/daily`)
  return promise;
}
export { SignUp, Login, CreateHabits, ListHabits, HabitsToday, HabitsDone, HabitsNotDone, HabitsHistory }