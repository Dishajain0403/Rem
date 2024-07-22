import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tro from './tro';
import Create from './create';
import Ca from './Ca';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNavigated, setIsNavigated] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', username, password);
    setIsNavigated(true);
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    console.log('Forgot password');
    setIsForgotPassword(true);
  };

  const handleCreateAccount = () => {
    setIsCreateAccount(true);
  };

  if (isNavigated) {
    return <Ca />;
  }

  if (isForgotPassword) {
    return <Tro />;
  }

  if (isCreateAccount) {
    return <Create />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remember MyAppointment</Text>

      <TextInput
        style={styles.input}
        placeholder="Phone number, username, or email"
        onChangeText={setUsername}
        value={username}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
        <TouchableOpacity style={styles.resetButton} onPress={handleForgotPassword}>
          <Text style={styles.resetButtonText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.or}>OR</Text>

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  resetButton: {
    marginBottom: 20,
  },
  resetButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
  or: {
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default App;