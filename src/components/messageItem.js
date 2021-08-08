import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function MessageItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.from}>From: {props.user}</Text>
      <Text style={styles.message}>{props.message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBEAF3",
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 30,
    width: 270,
  },
  from: {
    color: "grey",
  },
  message: {
    fontSize: 20,
  },
})
