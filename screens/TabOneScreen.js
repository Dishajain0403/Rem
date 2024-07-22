import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Resp from './TabTwoScreen';

const App = () => {
  const [isNavigated, setIsNavigated] = useState(false);

  const handlenew = () => {
    setIsNavigated(true);
  };

  if (isNavigated) {
    // Navigate to the next page here
    // For example, using react navigation:
    // navigation.navigate('NextPage');
    return <Resp />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>
      <View style={styles.content}>
        <View style={styles.circle}>
          <Image
            source={require('./image.jpeg')} // replace with your image file
            style={styles.image}
          />
        </View>
        <Text style={styles.title}></Text>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Text style={styles.subtitle}>Remember MyAppointment</Text>
        <Text style={styles.description}>View schedule, and remember dental appointments easily</Text>
        <TouchableOpacity style={styles.button} onPress={handlenew}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'pace-between',
    padding: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    padding: 32,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FFFFF',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 329,
    height: 392,
    borderRadius: 75, // add this to make the image circular
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#06AEAF',
    padding: 16,
    borderRadius: 8,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;