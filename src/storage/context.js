import React, { useState } from "react"

import * as API from "../api"

const MyContext = React.createContext()

const StateProvider = (props) => {

const [user, setUser] = useState(null)
const [task, setTask] = useState(null)
const [messages, setMessages] = useState(null)


  const logIn = async (username, password) => {
    const test = await API.login(username, password)
    await getMe()
    return test
  }

  const getMe = async () => {
    const me = await API.getMe()
    setUser(me)
    return me
  }

  const getTask = async () => {
    const task = await API.getTasks()
    setTask(task) 
    return task
  }
  const getTaskById = async (id) => {
    const task = await API.getTaskById(id)
    return task
  }

  const editTaskById = async (id) => {
    const task = await API.editTaskById(id)
    getTask()
    return task
  }

  const getMessagesByTask = async (task) => {
    const taskMessages = await API.getMessagesByTask(task)
    setMessages(taskMessages)
    return taskMessages
  }

  const postImage = async (task, formData) => {
    const Image = await API.postImage(task, formData)
    return Image
  }

  const postMessage = async (task, message) => {
    const newMessage = await API.postMessage(task, message)
    return newMessage
  }

  const createNewTask = async (clientId, message) => {
    const task = await API.createNewTask(clientId, message)
    return task
  }

  const logOut = async () => {
    const token = await API.logOut()
    return token
  }

  return (
    <MyContext.Provider
      value={{
        logIn,
        getMe,
        getTask,
        getTaskById,
        editTaskById,
        getMessagesByTask,
        postImage,
        postMessage,
        createNewTask,
        logOut,
        user,
        task,
        messages,
       // activeTask
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export { StateProvider, MyContext }
