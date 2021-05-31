import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default function Header(props) {    

  return (
    <View style={styles.container}>
      <Button
        title = "Toggle" onPress={() => props.navigation.toggleDrawer()}   
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
});