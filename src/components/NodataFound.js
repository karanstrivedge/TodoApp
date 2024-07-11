import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Screen, color} from '../Helper/Constants';

const NoDataFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Data Found</Text>
    </View>
  );
};

export default NoDataFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: Screen.fontScale * 18,
    color: color.primary,
  },
});
