import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, Modal } from 'react-native';

const AppointmentScheduler = () => {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] = useState('');

  const handleSubmit = () => {
    const newAppointment = {
      name: patientName,
      age,
      gender,
      id,
      phone: phoneNumber,
      appointment_date: appointmentDate,
      appointment_time: appointmentTime,
      appointment_type: appointmentType,
    };

    setAppointments([...appointments, newAppointment]);
    setConfirmationSnackbarMessage('Appointment successfully added!');
    setConfirmationModalOpen(true);
  };

  return (
    <View>
      <Text>Dental Appointment Scheduler</Text>
      <TextInput
        placeholder="Patient Name"
        value={patientName}
        onChangeText={text => setPatientName(text)}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={text => setAge(text)}
      />
      <Picker
        selectedValue={gender}
        onValueChange={itemValue => setGender(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <TextInput
        placeholder="ID"
        value={id}
        onChangeText={text => setId(text)}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <TextInput
        placeholder="Appointment Date"
        value={appointmentDate}
        onChangeText={text => setAppointmentDate(text)}
      />
      <TextInput
        placeholder="Appointment Time"
        value={appointmentTime}
        onChangeText={text => setAppointmentTime(text)}
      />
      <Picker
        selectedValue={appointmentType}
        onValueChange={itemValue => setAppointmentType(itemValue)}
      >
        <Picker.Item label="General" value="general" />
        <Picker.Item label="Specialist" value="specialist" />
        <Picker.Item label="Follow-up" value="follow-up" />
      </Picker>
      <Button title="Schedule Appointment" onPress={handleSubmit} />
      <Modal
        visible={confirmationModalOpen}
        animationType="slide"
        transparent={true}
      >
        <View>
          <Text>{confirmationSnackbarMessage}</Text>
          <Button title="OK" onPress={() => setConfirmationModalOpen(false)} />
        </View>
      </Modal>
      <Text>Appointments:</Text>
      {appointments.map((appointment, index) => (
        <Text key={index}>
          {appointment.name} - {appointment.appointment_date} at {appointment.appointment_time}
        </Text>
      ))}
    </View>
  );
};

export default AppointmentScheduler;