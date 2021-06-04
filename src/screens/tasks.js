//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TaskItem from '../components/taskItem'
import Button from '../components/button'

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
    
     const handlePress = () => {
        props.navigation.navigate('Create task')
     }
    
  const renderItem = ({ item }) => (
    <TaskItem navigation={props.navigation} id={item.id} description={item.description}/>
  )

  return (
    <View style={styles.container}>
      <Button title='Create Task' onPress={handlePress} />
      <Text style={styles.heading}>Your tasks</Text> 
      <FlatList
        keyExtractor={item => String(item.id)}
        data={DATA}
        renderItem={renderItem}
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
    backgroundColor: 'orange',
    padding: 6,
    paddingHorizontal: 130,
    borderRadius: 5
  }
});