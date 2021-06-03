import React, {useState} from 'react'

import * as API from '../api'

const MyContext = React.createContext()



const MyContextProvider = props => {

  const [theme, setTheme] = useState("dark")
  const [user, setUser] = useState([])

  const switchTheme = newTheme => {
    setTheme(newTheme)
  }
  
  const logIn = async (username, password) =>{
   const test = await API.login(username, password)
    setUser(username)
    console.log('storage' + test)
  }
  
  return(
    <MyContext.Provider value={{theme, switchTheme, user, logIn}}>
      {props.children}   
    </MyContext.Provider>
  )
}






export {MyContextProvider, MyContext}