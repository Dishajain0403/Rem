import React, { useState } from 'react';
//import { Picker } from '@react-native-picker/picker';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Picker } from 'react-native';

const AppointmentForm = () => {
  const [patientName, setPatientName] = useState('');
  const [patientId, setPatientId] = useState('');
  const [patientPhoneNo, setPatientPhoneNo] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [checkupType, setCheckupType] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleSubmit = () => {
    // Add your API call or submission logic here
    console.log('Form submitted:', {
      patientName,
      patientId,
      patientPhoneNo,
      patientAge,
      pattientGender,
      appointmentDate,
      appointmentTime,
      checkupType,
      selectedDoctor,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Patient Information</Text>
        <TextInput
          style={styles.input}
          value={patientName}
          onChangeText={(text) => setPatientName(text)}
          placeholder="Enter name"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          value={patientId}
          onChangeText={(text) => setPatientId(text)}
          placeholder="Enter ID"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={patientPhoneNo}
          onChangeText={(text) => setPatientPhoneNo(text)}
          placeholder="Enter phone number"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={patientId}
          onChangeText={(text) => setPatientId(text)}
          placeholder="Enter Age"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
        />
        <Picker
          selectedValue={checkupType}
          onValueChange={(itemValue) => setCheckupType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Appointment Details</Text>
        <TextInput
          style={styles.input}
          value={appointmentDate}
          onChangeText={(text) => setAppointmentDate(text)}
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
        />
        <Picker
          selectedValue={appointmentTime}
          onValueChange={(itemValue) => setAppointmentTime(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select time" value="" />
          
          <Picker.Item label="10:00 AM" value="10:00 AM" />
          <Picker.Item label="11:00 AM" value="11:00 AM" />
          <Picker.Item label="12:00 PM" value="12:00 PM" />
          <Picker.Item label="01:00 PM" value="01:00 PM" />
          <Picker.Item label="02:00 PM" value="02:00 PM" />
          <Picker.Item label="03:00 PM" value="03:00 PM" />
          <Picker.Item label="04:00 PM" value="04:00 PM" />
          <Picker.Item label="05:00 PM" value="05:00 PM" />
          <Picker.Item label="06:00 PM" value="06:00 PM" />
          <Picker.Item label="07:00 PM" value="07:00 PM" />
          <Picker.Item label="08:00 PM" value="08:00 PM" />
          <Picker.Item label="09:00 PM" value="09:00 PM" />
          <Picker.Item label="10:00 PM" value="10:00 PM" />
          
        </Picker>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Additional Information</Text>
       
        <Picker
          selectedValue={checkupType}
          onValueChange={(itemValue) => setCheckupType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select checkup type" value="" />
          <Picker.Item label="General Checkup" value="General Checkup" />
          <Picker.Item label="Follow-up Checkup" value="Follow-up Checkup" />
          <Picker.Item label="Specialist Checkup" value="Specialist Checkup" />
        </Picker>
      </View>

      <Button title="Submit" onPress={handleSubmit} style={styles.submitButton} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formSection: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  picker: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
});

export default AppointmentForm;