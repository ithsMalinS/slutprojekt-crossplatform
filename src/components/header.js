import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';

export default function Header(props) {    
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Inge Bra Bygg</Text>
      <TouchableHighlight 
        onPress={() => props.navigation.toggleDrawer()}
        style={styles.touchable}
        activeOpacity={0.7}
        underlayColor="#DDDDDD"
        >
                
        <Image 
          source={require("../assets/menu.png")}
          style={styles.logo}
        />

      </TouchableHighlight>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {  
    width: '100%',
    paddingTop: 40,
    backgroundColor: '#869f9f',
    flexDirection:'row',
    justifyContent: 'flex-end'
  },
  logo:{
    width: 30,
    height: 30,
  },
  touchable:{
    marginRight: 30,
    marginTop: 8,
  },
  heading: {
    color: '#4e6262',
    marginRight: 50,
    fontSize: 30,
    marginBottom: 10,
  }
});