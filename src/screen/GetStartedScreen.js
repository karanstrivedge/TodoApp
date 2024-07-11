import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {color, Screen} from '../Helper/Constants';
import Button from '../components/Button';

const GetStartedScreen = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={color.primary} />
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to TodoApp</Text>
        </View>
        <Button
          title={'Get Started'}
          onPress={() => navigation.navigate('TodoList')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  title: {
    fontSize: Screen.fontScale * 28,
    marginBottom: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    color: color.black,
  },
  textStyle: {
    fontSize: Screen.fontScale * 20,
    color: color.white,
  },
  bgstyle: {
    backgroundColor: color.primary,
    width: Screen.width / 1.2,
    borderRadius: 10,
    alignItems: 'center',
    padding: Screen.width / 30,
    alignSelf: 'center',
    marginBottom: Screen.width / 30,
  },
});

export default GetStartedScreen;
