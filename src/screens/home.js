import React, { useEffect, useContext, useState } from "react"
import { StyleSheet, Text, View} from "react-native"

import Header from "../components/header"
import { MyContext } from "../storage/context"

import Button from "../components/button"
import { removeKey } from "../storage/expoStorage"
import Swipeable from "react-native-gesture-handler/Swipeable"


export default function Home(props) {
  const { getMe } = useContext(MyContext)
  const { logOut } = useContext(MyContext)
  const { user } = useContext(MyContext)
  const [theme, setTheme]=useState('peachpuff')

  const run = async () => {
    await getMe()
  }

  const setStatus = () => {
    console.log("done")
  }

  useEffect(() => {
    run()
  }, [])

  const signOut = async () => {
    props.navigation.navigate("Login")
    await logOut()

    await removeKey("token")
  }

  const swapTheme = (theme)=>{
setTheme(theme)
  }

  return (
    <View style={[styles.container, {backgroundColor:`${theme}`}]} >
      <Header navigation={props.navigation} />

      {user && (
        <View>
          <Text>Välkommen {user.username}</Text>
          
          <Text>Du är en {user.role}</Text>
        </View>
      )}
      <Text>Swipea för att kolla vilket tema som är nice</Text>
      <Swipeable
        renderRightActions={() => (
          <View style={styles.optionsView} onPress={setStatus}>
            <Text onPress={()=>swapTheme('darkgrey')} style={styles.dark}>Välj mörkt tema till din fina profilsida</Text>
          </View>
        
        )}
      >
        <Text onPress={()=> swapTheme('pink')} style={styles.light}>Välj ljust tema till din fina profilsida</Text>
      </Swipeable>
        <Button title="Log out" onPress={signOut}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "peachpuff",
    alignItems: "center",
  },

  light:{
    borderWidth: 2,
    backgroundColor: 'pink',
    padding: 20,
    width: 150,
    color: 'black',

  },
  dark:{
    borderWidth: 2,
    backgroundColor: 'darkgrey',
    padding: 20,
    width: 150
  },


})
