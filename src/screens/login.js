//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import LoginForm from "../components/loginForm"
import { getValueFor } from "../storage/expoStorage"
import { MyContext } from "../storage/context"
import { setToken } from "../api"

export default function Login(props) {
  const { getMe } = useContext(MyContext)

  useEffect(() => {
    run()
    console.log("use effect från login")
  }, [])

  const run = async () => {
    // console.log('update')

    const token = await getValueFor("token")
    //console.log(loggedIn)
    console.log('kollar om det finns en token', token)
    if (token) {
      setToken(token)
     // await getMe()
      
      console.log('token finns i secure storage')
      props.navigation.navigate("Home")
    }
  }

  return (
    <View style={styles.container}>
      <LoginForm navigation={props.navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#869f9f",
  },
  text: {
    marginTop: 40,
    fontSize: 20,
    color: "white",
  },
})
