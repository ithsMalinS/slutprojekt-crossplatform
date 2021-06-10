import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function TaskInfo(props) {    

  return (
    <View style={styles.container}>
      <Text>Jag är en imagepicker</Text>
      <Button
        title="Open library"
        />
    <Button
        title="Open camera"
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