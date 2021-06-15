import React, { useState } from "react"

import * as API from "../api"

const MyContext = React.createContext()

const MyContextProvider = (props) => {

const [user, setUser] = useState(null)

  const logIn = async (username, password) => {
    const test = await API.login(username, password)
    await getMe()
    return test
  }

  const getMe = async () => {
    const me = await API.getMe()
    console.log(me)
    setUser(me)
    return me
  }

  const getTask = async () => {
    const task = await API.getTasks()
    return task
  }
  const getTaskById = async (id) => {
    const task = await API.getTaskById(id)
    return task
  }

  const getMessagesByTask = async (task) => {
    const messages = await API.getMessagesByTask(task)
    return messages
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
        getMessagesByTask,
        postImage,
        postMessage,
        createNewTask,
        logOut,
        user
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export { MyContextProvider, MyContext }
