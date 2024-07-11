// components/Header.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {Screen, color, imagePath} from '../Helper/Constants';

const Header = ({title, isBack, navigation, isAdd}) => {
  return (
    <>
      <StatusBar backgroundColor={color.primary} />
      <View style={styles.header}>
        <View style={styles.subheader}>
          {isBack && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Image source={imagePath.back} style={styles.imageStyle} />
            </TouchableOpacity>
          )}
          <Text style={styles.headerText}>{title}</Text>
          {isAdd ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('AddEditTodo', {type: 'ADD'})}
              style={styles.backButton}>
              <Image source={imagePath.add} style={styles.imageStyle} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.backButton}></TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: Screen.height / 14,
    backgroundColor: color.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subheader: {
    width: '98%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginLeft: Screen.height / 50,
  },
  headerText: {
    color: 'white',
    fontSize: Screen.fontScale * 22,
    textTransform: 'capitalize',
    marginLeft: 10,
  },
  imageStyle: {
    width: Screen.height / 30,
    height: Screen.height / 30,
    tintColor: color.white,
  },
});

export default Header;
