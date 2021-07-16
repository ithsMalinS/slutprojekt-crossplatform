
import React, { useEffect} from "react"
import { StyleSheet, View } from "react-native"
import LoginForm from "../components/loginForm"
import { getValueFor } from "../storage/expoStorage"
import { setToken } from "../api"

export default function Login(props) {
 

  useEffect(() => {
    run()
  }, [])

  const run = async () => {
    const token = await getValueFor("token")

    if (token) {
      setToken(token)

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
