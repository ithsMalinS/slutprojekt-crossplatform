import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"

export default function TaskItem(props) {
  const [done, setDone] = useState(null)
  const todoBackgroundColor = "#C0C0C0"
  const doneBackgroundColor = "#999797"
  const doneTextColor = "#cfcfcf"

  const checkDone = () => {
    if (props.task.done == true) {
      setDone(true)
    } else {
      setDone(false)
    }
  }

  useEffect(() => {
    checkDone()
  }, [props.task])

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: done ? doneBackgroundColor : todoBackgroundColor },
      ]}
    >
      <Text style={[styles.taskId, { color: done ? doneTextColor : "white" }]}>
        Task ID: {props.task.id}
      </Text>
      <Text
        style={[styles.description, { color: done ? doneTextColor : "white" }]}
      >
        {props.task.description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    padding: 10,
    paddingHorizontal: 90,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskId: {
    fontSize: 15,
  },
  description: {
    textAlign: "center",
    fontSize: 20,
  },
  checkImg: {
    height: 30,
    width: 30,
    marginBottom: 10,
  },
  optionsView: {
    padding: 20,
    marginTop: 30,
  },
})
