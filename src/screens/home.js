import React, { useEffect, useState, useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
//import { getMe } from '../api';
import Header from "../components/header"
import { MyContext } from "../storage/context"
import ImageUpload from "../components/ImageUpload"
import Button from "../components/button"
//import {setValues, getValueFor} from "../storage/expoStorage"

export default function Home(props) {
  const [me, setUser] = useState([])
  //const { getMe } = useContext(MyContext)
  const { logOut } = useContext(MyContext)
  const { user } = useContext(MyContext)
  //const [inputKey, setKey] = React.useState("key")
  //const [inputValue, setValue] = React.useState("value")

  const run = async () => {
    await setUser(user)
    console.log('me',me)
  }

  useEffect(() => {
    run()
    console.log('user', user)
  }, [user])

  const signOut = async () => {
    props.navigation.navigate("Login")
    const status = await logOut()
    setUser(false)
    console.log("token =", status)
  }

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />

      {/* <Text>{me.username}</Text>
      <Text>{me.role}</Text> */}

      <Button title="Log out" onPress={signOut}></Button>

      <ImageUpload />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "peachpuff",
    alignItems: "center",
  },
})
