import React, { useEffect, useContext } from "react"
import { StyleSheet, Text, View } from "react-native"

import Header from "../components/header"
import { MyContext } from "../storage/context"
import ImageUpload from "../components/ImageUpload"
import Button from "../components/button"
import { removeKey } from "../storage/expoStorage"


export default function Home(props) {
 
  const { getMe } = useContext(MyContext)
  const { logOut } = useContext(MyContext)
  const { user } = useContext(MyContext)
 

  const run = async () => {
    await getMe()
   
  }

  useEffect(() => {
    run()
    
  }, [])

  const signOut = async () => {
    props.navigation.navigate("Login")
    await logOut()
    
    await removeKey('token')
    
  }

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />

{user&& 
<View>
      <Text>{user.username}</Text>
      <Text>{user.role}</Text>
      </View>
}
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
