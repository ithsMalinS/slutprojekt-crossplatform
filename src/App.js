import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import Drawer from "./navigation/drawer"
import { StateProvider } from "../src/storage/context"

export default function App() {
  return (
    <StateProvider>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </StateProvider>
  )
}
