import React, { useContext, useState, useEffect } from "react"
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import Messages from "./messages"
import ImageUpload from "../components/ImageUpload"
import { MyContext } from "../storage/context"

export default function TaskDetail(props) {
  const { user } = useContext(MyContext)
  const { editTaskById } = useContext(MyContext)
  const [status, setStatus] = useState("active")

  const markDone = () => {
    editTaskById(props.task.id)
    props.closeTask()
  }

  useEffect(() => {
    if (props.task.done == 0) {
      setStatus("active")
    } else {
      setStatus("done")
    }
  }, [])

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.taskContainer}
      >
        <TouchableOpacity style={styles.close} onPress={props.closeTask}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
        {user.role == "worker" && status == "active" && (
          <TouchableOpacity onPress={markDone}>
            <Text>Mark as done</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.heading}>Task ID: {props.task.id}</Text>

        {props.task.imageFile == null && <ImageUpload task={props.task} />}

        <Text>Status: {status}</Text>

        <Text style={styles.description}>
          Description: {props.task.description}
        </Text>

        {props.task.imageFile !== null && (
          <Image
            source={{ uri: `http://10.0.2.2:8080/uploads/${props.task.imageFile}` }}
            style={{ width: 200, height: 200 }}
          />
        )}
        <Messages task={props.task.id} />
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  close: {
    top: -30,
    right: -30,
    alignSelf: "flex-end",
    borderRadius: 50,
    backgroundColor: "gray",
    padding: 7,
    paddingHorizontal: 15,
  },
  closeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    zIndex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 50,
  },
  taskContainer: {
    backgroundColor: "white",
    padding: 40,
    position: "absolute",
    height: "105%",
    left: 30,
    right: 30,
    top: 30,
    bottom: 30,
    borderRadius: 30,
    overflow: "scroll",
    flex: 1,
  },
  heading: {
    fontSize: 30,
  },
  description: {
    marginBottom: 20,
  },
  checkImg: {
    height: 30,
    width: 30,
    marginBottom: 10,
  },
})
