import * as React from "react"
import * as SecureStore from "expo-secure-store"
//import { Text, View, TextInput, Button } from "react-native"

export async function setValues(key, value) {
  const storeValue = await getValueFor(key)
  if (!storeValue) {
    //console.log(key)
    //console.log(value)

    await SecureStore.setItemAsync(key, value)
  } else {
    //console.log(storeValue)
  }
}

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key)
  
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result)

    return result
  } else {
    return false
    // alert("No values stored under that key.")
  }
}


export async function removeKey(key) {
  await SecureStore.deleteItemAsync(key)
  

}