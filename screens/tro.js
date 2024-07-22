import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with email:', email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.lockIcon}>
        {/* Replace with your lock icon component */}
        <Text>🔒</Text>
      </View>
      <Text style={styles.title}>Trouble logging in?</Text>
      <Text style={styles.subtitle}>
        Enter your email, phone, or username and we'll send you a
        link to get back into your account.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email, Phone, or Username"
        onChangeText={setEmail}
        value={email}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Send Link</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Can't reset your password?</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create new account</Text>
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
  lockIcon: {
    marginBottom: 20,
    fontSize: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  resetButton: {
    padding: 10,
    marginBottom: 10,
  },
  resetButtonText: {
    color: 'blue',
    textAlign: 'center',
  },
  orText: {
    marginBottom: 10,
  },
  createButton: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 5,
    width: '80%',
  },
  createButtonText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginScreen;