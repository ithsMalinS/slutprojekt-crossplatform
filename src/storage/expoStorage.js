import * as SecureStore from "expo-secure-store"

export async function setValues(key, value) {
  const storeValue = await getValueFor(key)
  if (!storeValue) {
    await SecureStore.setItemAsync(key, value)
  } else {
  }
}

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key)

  if (result) {
    return result
  } else {
    return false
  }
}

export async function removeKey(key) {
  await SecureStore.deleteItemAsync(key)
}
