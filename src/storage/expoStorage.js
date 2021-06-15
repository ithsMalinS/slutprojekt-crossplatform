import * as React from "react"
import * as SecureStore from "expo-secure-store"
//import { Text, View, TextInput, Button } from "react-native"

export async function setValues(key, value) {
  const storeValue = await getValueFor(key)
  if (!storeValue) {
    console.log(key)
    console.log(value)

    await SecureStore.setItemAsync(key, value)
  } else {
    console.log(storeValue)
  }
}

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key)
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result)

    return true
  } else {
    return false
    // alert("No values stored under that key.")
  }
}

// export default function setValues() {

//   const [inputKey, setKey] = React.useState('key')
//   const [inputValue, setValue] = React.useState('value')

//   return (
//     <View style={{ margin: 60 }}>
//       <Text>key input</Text>
//       <TextInput
//         value={inputKey}
//         style={{ backgroundColor: "white", margin: 10 }}
//         onChangeText={newText => setKey(newText)}
//       ></TextInput>

//       <TextInput
//         value={inputValue}
//         style={{ backgroundColor: "white", margin: 10 }}
//         onChangeText={(newText) => setValue(newText)}
//       ></TextInput>

//       <Button
//         title="Save"
//         onPress={() => {
//           save(inputKey, inputValue)
//         //   onChangeKey(setValues({ key }))
//         //   onChangeValue(setValues({ value }))
//         }}
//       />

//       <Text>välj nyckel att hämta</Text>
//       <TextInput
//         style={{ backgroundColor: "white" }}
//         onSubmitEditing={(event) => {
//           getValueFor(event.nativeEvent.text)
//         }}
//         placeholder="Enter the key for the value you want to get"
//       />
//     </View>
//   )
// }
