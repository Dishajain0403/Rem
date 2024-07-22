import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Edit from './edit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState(appointments);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = appointments.filter(
      (appointment) =>
        appointment.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredAppointments(filtered);
  };

  const handlenew = () => {
    // Navigate to the Edit page using a navigation library
    // For example, using React Navigation:
    //navigation.navigate('Edit');
    return <Edit />
  };

  const renderItem = ({ item }) => (
    <View style={styles.appointmentBox}>
      <View style={styles.appointmentItem}>
        <Text style={styles.appointmentName}>{item.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={handlenew}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icon name="tooth-outline" size={24} color="#007bff" />
          </View>
        </View>
      </View>
      <View style={styles.appointmentDetailsContainer}>
        <View style={styles.appointmentDetails}>
          <Text style={styles.appointmentDate}>{item.date}</Text>
          <Text style={styles.appointmentTime}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Remember MyAppointment</Text>
        <Icon name="tooth-outline" size={30} color="#007bff" />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search name"
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <Icon name="magnify" size={24} color="#007bff" />
      </View>
      <FlatList
        data={filteredAppointments}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={styles.list}
      />
    </View>
  );
};

const appointments = [
  {
    name: 'Mr. Sandeep yadav',
    date: '26-06-24',
    time: '4:20pm',
  },
  {
    name: 'Mr. Anjali kumar',
    date: '26-06-24',
    time: '6:00pm',
  },
  {
    name: 'Ms. Sushma rap',
    date: '26-06-24',
    time: '6:00pm',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  appointmentBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007bff',
    marginBottom: 10,
  },
  appointmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appointmentName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  editText: {
    fontSize: 14,
    color: '#007bff',
    marginRight: 5,
  },
  appointmentDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  appointmentDetails: {
    flexDirection: 'column',
  },
  appointmentDate: {
    fontSize: 16,
  },
  appointmentTime: {
    fontSize: 16,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
});

export default App;