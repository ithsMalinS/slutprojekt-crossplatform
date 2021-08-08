import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import {MyContext} from '../storage/context'


export default function TaskInfo(props) {

  const {postImage} = useContext(MyContext)

  const [image, setImage] = useState(null)
  const [uploadedImage, setUploadedImage] = useState(false)

  useEffect(() => {
    ImagePicker.requestMediaLibraryPermissionsAsync()
  }, [])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({})
    setImage(result)
  }


  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({})
    setImage(result)
  }

  const uploadImage = async () => {
    const formData = new FormData()
    formData.append('pic',{
      name: 'image.jpg',
      type: 'image/*',
      uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://','')
    })

    const response = await postImage(props.task.id,formData)
    setUploadedImage(true)  
  }





  return (
    <View style={styles.container}>
      <Text>Add a new image</Text>
      
      <Pressable style={styles.knapp} onPress={openCamera}>
        <Text style={styles.textis}>Open Camera</Text>
      </Pressable>


      {image && <Pressable style={styles.knapp}>
              <Text onPress={uploadImage} style={styles.textis}>Ladda upp</Text>
            </Pressable>
            }
      
      <Pressable style={styles.knapp} onPress={pickImage}>
        <Text style={styles.textis}>Open ImageFolder</Text>
      </Pressable >
      {image && <Image source={{ uri: image.uri }} style={{ width: 100, height: 100 }} />}
      
      {uploadedImage && <Text>Uppladdad!</Text>}

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
  textis: {
    color: 'blue'
  }

});