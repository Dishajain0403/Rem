import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';



const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [clinicAddress, setClinicAddress] = useState('');
  const [college, setCollege] = useState('');
  const [degree, setDegree] = useState('');
  const [experience, setExperience] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // API call to create account
      // For now, just console log the data
      console.log({
        username,
        password,
        email,
        phoneNumber,
        clinicName,
        clinicAddress,
        college,
        degree,
        experience,
      });
      setError(null);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Clinic Name"
          value={clinicName}
          onChangeText={text => setClinicName(text)}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Clinic Address"
          value={clinicAddress}
          onChangeText={text => setClinicAddress(text)}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="College"
          value={college}
          onChangeText={text => setCollege(text)}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Degree (e.g. BDS, DDS)"
          value={degree}
          onChangeText={text => setDegree(text)}
          placeholderTextColor="#AAAAAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Previous Experience (e.g. 5 years at XYZ Dental Clinic)"
          value={experience}
          onChangeText={text => setExperience(text)}
          placeholderTextColor="#AAAAAA"
        />
        {error ? (
          <Text style={styles.error}>{error}</Text>
        ) : null}
        <Button
          title="Create Account"
          onPress={handleSubmit}
          color="#007bff"
          accessibilityLabel="Create Account"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
});

export default CreateAccount;