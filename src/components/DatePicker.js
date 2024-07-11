import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {color, imagePath, Screen} from '../Helper/Constants';
import moment from 'moment';

const DatePicker = ({value, onChange, mode}) => {
  const [show, setShow] = useState(false);

  console.log('====================================');
  console.log('value==>' + value);
  console.log('====================================');

  const onChangeDate = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.textinput} onPress={() => setShow(true)}>
        <Text style={styles.title}>
          {mode === 'date'
            ? moment(value).format('DD/MM/YYYY')
            : moment(new Date(value)).format('hh:mm A')}
        </Text>
        <Image
          source={mode === 'date' ? imagePath.calendar : imagePath.clock}
          style={styles.icon}
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  textinput: {
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: Screen.fontScale * 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: Screen.width / 20,
    height: Screen.width / 20,
    marginRight: 10,
    tintColor: color.gray,
  },
  title: {
    marginBottom: 10,
    fontSize: Screen.fontScale * 17,
    padding: 5,
  },
});
