import axios from "axios"
import {setValues} from '../storage/expoStorage'

const HOST = "10.0.2.2"
const API = axios.create({ baseURL: `http://${HOST}:8080/api/v1` })


export function setToken(token) {
  API.defaults.headers.common["Authorization"] = token
}



//verkar inte användas
export async function fetchTasks() {
  const tasks = await API.get("/tasks")
  return tasks.tasks
}

export async function getMe() {
  try {
    const me = await API.get("/me")
console.log('get me från api', me.data.user)
    return me.data.user
  } catch (err) {}
}

export async function getTasks() {
  const tasks = await API.get("/tasks")
  return tasks
}

export async function getTasksById(id) {
  const task = await API.get(`/tasks/${id}`)
  return task
}

export async function createNewTask(clientId, message) {
  const task = await API.post(`/tasks`, {
    description: message,
    CustomerID: clientId,
  })
  return task
}

export async function getMessagesByTask(task) {
  try {
    const messages = await API.get(`/tasks/${task}/messages`)
    return messages
  } catch (err) {
    //console.log(err.response.status)
   // console.log(err.response.data)
    return false
  }
}

export async function postImage(task, formData) {
  const Image = await API.post(`/tasks/${task}/image`, formData)
  return Image
}

export async function postMessage(task, message) {
  const newMessage = await API.post(`/tasks/${task}/messages`, {
    text: message,
  })
  return newMessage
}

export async function login(username, password) {
  try {
    const response = await API.post("/authenticate", {
      username: username,
      password: password,
    })
    if(response == undefined){
      return false
    } else if (response.status == 200) {
      //console.log(response.data.token)
      setToken(response.data.token)
     setValues('token', response.data.token)
      return true
    }

  } catch (err) {
   // console.log(err)
  }
}

export async function logOut() {
  try {
    //setToken(null)
   // const token = API.defaults.headers.common["Authorization"]
   delete API.defaults.headers.common["Authorization"]

    //return token
  } catch (err) {}
}
