import React, {useEffect, useState, useContext  } from 'react';
import { StyleSheet, Text, View} from 'react-native';
//import { getMe } from '../api';
import Header from '../components/header'
import { MyContext } from '../storage/context'



export default function Home(props) {
  
  const [user, setUser] = useState([])
  const { getMe } = useContext(MyContext)
  
  const run = async () => {
    const user = await getMe()
    //console.log(user.data.user);
    setUser(user.data.user)  
   }

  useEffect(() =>{ 
    run()
    // getMe().then((user)=> setUser(user))
    //getMe().then(setUser)
    
  },[])
 

  return (
    <View style={styles.container}>
    <Header navigation={props.navigation}/>
      <Text>{user.username}</Text>
      <Text>{user.role}</Text>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'peachpuff',
    alignItems: 'center',
    
    
  },
});