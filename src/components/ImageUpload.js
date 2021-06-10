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

  const uploadImage = async () => {
    console.log('steg1');
    const formData = new FormData()
    formData.append('pic',{
      name: 'kalleMoreus.jpg',
      type: 'image/*',
      uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://','')
    })

    const response = await postImage(1,formData)
    setUploadedImage(true)  
  }





  return (
    <View style={styles.container}>
      <Text>Jag är en imagepicker</Text>

      <Pressable style={styles.knapp} onPress={malin}>
        <Text style={styles.textis}>Open Camera</Text>
      </Pressable>
      <Pressable style={styles.knapp} onPress={pickImage}>
        <Text style={styles.textis}>Open ImageFolder</Text>
      </Pressable >
      {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
      {image && <Pressable onPress={uploadImage} style={styles.knapp}>
        <Text style={styles.textis}>Kalle </Text>
      </Pressable>
      }
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