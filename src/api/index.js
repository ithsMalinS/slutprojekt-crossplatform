import axios from "axios"
const HOST = "10.0.2.2"
const API = axios.create({ baseURL: `http://${HOST}:8080/api/v1` })

export function setToken(token) {
  API.defaults.headers.common["Authorization"] = token
}

export async function fetchTasks() {
  const tasks = await API.get("/tasks")
  return tasks.tasks
}

export async function getMe() {
  //console.log(response.headers);
  const me = await API.get("/me")
  // console.log(me)
  return me
}
export async function getTasks() {
  //console.log(response.headers);
  const tasks = await API.get("/tasks")
  // console.log(tasks)
  return tasks
}

export async function getTasksById(id) {

  const task = await API.get(`/tasks/${id}`)
  // console.log(tasks)
  return task
}


export async function login(username, password) {
  try {
    const response = await API.post("/authenticate", {
      username: username,
      password: password,
    })
    if (response.status == 200) {
      setToken(response.data.token)
    } 
    return response.status
  } catch (err) {
      console.log(err)
  }
}
