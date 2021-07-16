
import React from 'react';
import { Text, Pressable} from 'react-native';
import ButtonStyle from '../style/styling'

export default function Button({title, onPress}) {

  return (
    <Pressable
      style={ButtonStyle.button}
      onPress={onPress}
    >
      <Text style={ButtonStyle.buttonText}>{title}</Text>
    </Pressable>
  );
}




 
