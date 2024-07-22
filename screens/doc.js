import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const DoctorProfile = () => {
  const [] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          {/* Replace with actual avatar component */}
          <Text>👤</Text>
        </View>
        <Text style={styles.name}>Dr. T.A. Saraf</Text>
        <Text style={styles.qualification}>Masters in Dental Surgery (MDS)</Text>
      </View>
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>About </Text>
        {/* Replace with actual about information */}
        <Text style={styles.aboutContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed euismod, nibh non pharetra volutpat, nulla sapien
          mattis diam, a ullamcorper dolor ligula id mi. 
          </Text>
          <br></br>
          <Text style={styles.aboutTitle}>Experiance</Text>
        {/* Replace with actual about information */}
        <Text style={styles.aboutContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed euismod, nibh non pharetra volutpat, nulla sapien
          mattis diam, a ullamcorper dolor ligula id mi. 
          </Text>
      
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ffff',
    padding: 20,
  },
  profile: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  qualification: {
    fontSize: 16,
    color: '#555',
  },
  about: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutContent: {
    fontSize: 16,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusLabels: {
    flexDirection: 'row',
  },
  statusLabel: {
    fontSize: 14,
    marginLeft: 10,
  },
});

export default DoctorProfile;