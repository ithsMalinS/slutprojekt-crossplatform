//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TaskItem from '../components/taskItem'

const DATA = [
    {
      id: 1,
      description: 'Bygg en veranda',
      imageFile: ''
    },
    {
      id: 2,
      description: 'Fixa taket',
      imageFile: ''
    },
    {
      id: 3,
      description: 'Riv en vägg',
      imageFile: ''
    },
  ]
 

export default function Tasks(props) {    

  const renderItem = ({ item }) => (
    <TaskItem navigation={props.navigation} id={item.id} description={item.description}/>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your tasks</Text> 
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    marginTop: 20,
    fontSize: 30,
    backgroundColor: '#4e9ac7',
    padding: 6,
    paddingHorizontal: 130,
    borderRadius: 5
  }
});