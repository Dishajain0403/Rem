import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Picker, DatePickerAndroid, TimePickerAndroid } from 'react-native';

const EditAppointment = () => {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [appointmentTime, setAppointmentTime] = useState(new Date());

  const handleNameChange = (text) => {
    setPatientName(text);
  };

  const handleAgeChange = (text) => {
    setAge(text);
  };

  const handleGenderChange = (itemValue) => {
    setGender(itemValue);
  };

  const handleDateChange = (date) => {
    setAppointmentDate(date);
  };

  const handleTimeChange = (time) => {
    setAppointmentTime(time);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Appointment</Text>

      <Text style={styles.label}>Patient Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter patient name"
        value={patientName}
        onChangeText={handleNameChange}
      />

      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter age"
        value={age}
        onChangeText={handleAgeChange}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Gender:</Text>
      <Picker
        selectedValue={gender}
        onValueChange={handleGenderChange}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Text style={styles.label}>Appointment Date:</Text>
      <DatePickerAndroid
        value={appointmentDate}
        onChange={handleDateChange}
      />

      <Text style={styles.label}>Appointment Time:</Text>
      <TimePickerAndroid
        value={appointmentTime}
        onChange={handleTimeChange}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default EditAppointment;