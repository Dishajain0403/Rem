
// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigatoimport React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import pg from '../screens/pg';
import TabOneScreen from '../screens/TabOneScreen';
import Doc from '../screens/doc';

const BottomTab = createBottomTabNavigator();
const TabOneStack = createStackNavigator();
const PgStack = createStackNavigator();
const DocStack = createStackNavigator();

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Home"
        component={TabOneScreen}
        options={{ headerTitle: 'Home Page' }}
      />
    </TabOneStack.Navigator>
  );
}

function PgNavigator() {
  return (
    <PgStack.Navigator>
      <PgStack.Screen
        name="PgScreen"
        component={pg}
        options={{ headerTitle: 'New Appointment' }}
      />
    </PgStack.Navigator>
  );
}

function DocNavigator() {
  return (
    <DocStack.Navigator>
      <DocStack.Screen
        name="Doc"
        component={Doc}
        options={{ headerTitle: 'Account' }}
      />
    </DocStack.Navigator>
  );
}

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="new"
        component={PgNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="add" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={DocNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}