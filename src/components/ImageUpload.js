import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function TaskInfo(props) {    

  const [image, setImage] = useState(null)

  useEffect(()=>{
    ImagePicker.requestMediaLibraryPermissionsAsync()
    .then(response => {
      console.log(response);
    })
  }, [])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({})
    setImage(result)
  }


  const malin = async () => {
    const result = await ImagePicker.launchCameraAsync({})
    setImage(result)
  }

  return (
    <View style={styles.container}>
      <Text>Jag är en imagepicker</Text>
      
    <Pressable style={styles.knapp} onPress={malin}>
      <Text style={styles.textis}>Open Camera</Text>
    </Pressable>
    <Pressable style={styles.knapp} onPress={pickImage}>
      <Text style={styles.textis}>Open ImageFolder</Text>
    </Pressable>
    {image && <Image source={{uri: image.uri}}  style={{width: 200, height:200}} />}
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
  knapp: {
    margin: 20,
  },
  textis:{
    color: 'blue'
  }
 
});