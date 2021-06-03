import {StyleSheet} from 'react-native'




const styles = StyleSheet.create({

  inputField: {
    backgroundColor: 'floralwhite',
    color: 'black',
    padding: 10,
    paddingHorizontal: 20,
    width: 300,
    fontSize: 20,
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  button: {
    backgroundColor: '#4e9ac7',
    color: 'white',
    padding: 10,
    paddingHorizontal: 35,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default styles