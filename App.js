import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Docks() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Docks </Text>
    </View>
  );
}

function Alarm() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Alarms</Text>
    </View>
  );
}
function Snopwatch() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Snopwatch</Text>
    </View>
  );
}
function Timmer() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Timmer </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer >
      <Tab.Navigator >
        <Tab.Screen name="Dock" component={Docks} />
        <Tab.Screen name="Alarm" component={Alarm} />
        <Tab.Screen name="Snopwatch" component={Snopwatch} />
        <Tab.Screen name="Timmer" component={Timmer} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}