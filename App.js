import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import GetStartedScreen from './src/screen/GetStartedScreen';
import TaskListScreen from './src/screen/TaskListScreen';
import TaskFormScreen from './src/screen/TaskFormScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
