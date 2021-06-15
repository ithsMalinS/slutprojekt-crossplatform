import React, { useEffect, useState, useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
//import { getMe } from '../api';
import Header from "../components/header"
import { MyContext } from "../storage/context"
import ImageUpload from "../components/ImageUpload"
import Button from "../components/button"
import SetValues from "../storage/expoStorage"

export default function Home(props) {
  const [user, setUser] = useState([])
  const { getMe } = useContext(MyContext)
  const { logOut } = useContext(MyContext)

  const run = async () => {
    const user = await getMe()
    //console.log(user.data.user);
    setUser(user.data.user)
  }

  useEffect(() => {
    run()
    // getMe().then((user)=> setUser(user))
    //getMe().then(setUser)
  }, [])

  const signOut = async () => {
    props.navigation.navigate('Login')
    const status = await logOut()
    setUser(false)
    console.log("token =", status)
  }

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <Text>{user.username}</Text>
      <Text>{user.role}</Text>

      <Button title="Log out" onPress={signOut}></Button>
      <SetValues></SetValues>
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
