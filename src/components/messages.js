//import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MessageItem from '../components/messageItem'
import MessageForm from '../components/messageForm'
import {MyContext} from '../storage/context'

export default function Messages(props) {
  
  const [messages, setMessages] = useState([])
  const {getMessagesByTask} = useContext(MyContext)

    const run = async () => {
      const Messages = await getMessagesByTask(props.task)
      setMessages(Messages.data.messages)  
     }
  
    useEffect(() =>{ 
      run()      
    },[])

    const renderItem = ({item}) => (
      <MessageItem message={item.text} user={item.UserId}/>
    )

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All messages</Text>
      <MessageForm task={props.task}/>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={messages}
        renderItem={renderItem}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontSize: 30,
      }

  
});