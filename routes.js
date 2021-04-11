import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AddDoctor from './src/container/AddDoctor';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'AddDoctor'}>
      <Stack.Screen name="AddDoctor" component={AddDoctor} />
    </Stack.Navigator>
  );
}
export default function Routes() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
