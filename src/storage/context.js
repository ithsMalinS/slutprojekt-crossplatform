import React, {useState} from 'react'


const MyContext = React.createContext()



const MyContextProvider = props => {

  const [theme, setTheme] = useState("dark")

  const switchTheme = newTheme => {
    setTheme(newTheme)
  }
  
  
  return(
    <MyContext.Provider value={{theme, switchTheme}}>
      {props.children}   
    </MyContext.Provider>
  )
}






export {MyContextProvider, MyContext}