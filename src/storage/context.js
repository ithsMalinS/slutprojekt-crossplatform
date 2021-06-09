import React, {useState} from 'react'

import * as API from '../api'

const MyContext = React.createContext()



const MyContextProvider = props => {

  const [theme, setTheme] = useState("dark")
  const [user, setUser] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [currentTasks, setCurrentTasks] = useState([])
  const [currentTask, setCurrentTask] = useState([])

  const switchTheme = newTheme => {
    setTheme(newTheme)
  }
  
  const logIn = async (username, password) =>{
   const test = await API.login(username, password)
    setUser(username)
    //console.log('storage' + test)
    return test
  }

  const getMe = async () =>{
    //console.log('hej');
    const me = await API.getMe()
    setCurrentUser(me)
    //console.log(me);
    return me
  }

  const getTask = async () =>{
    //console.log('hej');
    const task = await API.getTasks()
    setCurrentTasks(task)
    //console.log(me);
    return task
  }
  const getTaskById = async (id) =>{
    //console.log('hej');
    const task = await API.getTaskById(id)
    setCurrentTask(task)
    //console.log(me);
    return task
  }

  const getMessagesByTask = async (task) => {
    const messages = await API.getMessagesByTask(task)
    return messages
  }
  
  return(
    <MyContext.Provider value={{theme, switchTheme, user, logIn, currentUser, getMe, currentTasks, getTask, currentTask, getTaskById, setCurrentTask, getMessagesByTask}}>
      {props.children}   
    </MyContext.Provider>
  )
}






export {MyContextProvider, MyContext}