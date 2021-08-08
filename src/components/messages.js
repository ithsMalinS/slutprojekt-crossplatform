import React, { useEffect, useContext } from "react"
import { StyleSheet, View, FlatList } from "react-native"
import MessageItem from "../components/messageItem"
import MessageForm from "../components/messageForm"
import { MyContext } from "../storage/context"

export default function Messages(props) {
  const { getMessagesByTask } = useContext(MyContext)
  const { messages } = useContext(MyContext)

  const run = async () => {
    await getMessagesByTask(props.task)
  }

  useEffect(() => {
    run()
  }, [messages])

  const renderItem = ({ item }) => (
    <MessageItem message={item.text} user={item.UserId} />
  )

  return (
    <View style={styles.container}>
      <MessageForm task={props.task} getMessages={run} />
      {messages && (
        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={messages.data.messages}
          renderItem={renderItem}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
  },
})
