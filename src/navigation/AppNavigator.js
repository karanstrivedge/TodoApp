import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack';
import GetStartedScreen from '../screen/GetStartedScreen';
import TaskListScreen from '../screen/TaskListScreen';
import TaskFormScreen from '../screen/TaskFormScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted"
        navigationOptions={{
          headerVisible: false,
        }}
        screenOptions={{
          headerShown: false,
          estureEnabled: false,
          cardOverlayEnabled: true,
          // <-- The preset causing this issue!
        }}>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="TodoList" component={TaskListScreen} />
        <Stack.Screen name="AddEditTodo" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
