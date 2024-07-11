import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo, editTodo} from '../redux/action';
import DatePicker from '../components/DatePicker';
import Header from '../components/HeaderComponents';
import {color, Screen} from '../Helper/Constants';
import moment from 'moment';
import Button from '../components/Button';

const TaskFormScreen = ({route, navigation}) => {
  const {todo, type} = route.params || {};

  const [task, setTask] = useState('');
  const [date, setDate] = useState(moment().format('DD/MM/YYYY'));
  const [time, setTime] = useState(moment().format('HH:mm'));

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'EDIT' && todo) {
      setDate(moment(todo.date).format('DD/MM/YYYY'));
      setTask(todo.task);
      setTime(moment(todo.time).format('HH:mm'));
    }
  }, [type, todo]);

  const handleSave = () => {
    if (task !== '') {
      if (todo) {
        dispatch(
          editTodo({
            ...todo,
            task,
            date: moment(date, 'DD/MM/YYYY').toISOString(),
            time: moment(time, 'HH:mm').toISOString(),
          }),
        );
      } else {
        dispatch(
          addTodo({
            id: Date.now().toString(),
            task,
            date: moment(date, 'DD/MM/YYYY').toISOString(),
            time: moment(time, 'HH:mm').toISOString(),
            done: false,
          }),
        );
      }
      navigation.goBack();
    } else {
      ToastAndroid.show('Please enter Taskname', ToastAndroid.SHORT);
    }
  };

  const handleChangeDate = selectedDate => {
    setDate(moment(selectedDate).format('DD/MM/YYYY'));
  };

  const handleChangeTime = selectedTime => {
    setTime(moment(selectedTime).format('HH:mm'));
  };

  return (
    <>
      <Header title={`${type} Task`} navigation={navigation} isBack={true} />
      <View style={styles.mainContainer}>
        <TextInput
          placeholder="Task"
          value={task}
          onChangeText={setTask}
          style={styles.textinput}
        />
        <View style={{paddingVertical: 10}}>
          <DatePicker
            value={moment(date, 'DD/MM/YYYY').toDate()}
            onChange={handleChangeDate}
            mode={'date'}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <DatePicker
            value={moment(time, 'HH:mm').toDate()}
            onChange={handleChangeTime}
            mode={'time'}
          />
        </View>
        <Button
          title={type == 'EDIT' ? 'Update' : 'Save'}
          onPress={() => handleSave()}
        />
      </View>
    </>
  );
};

export default TaskFormScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: color.bgcolor,
  },
  textinput: {
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: Screen.fontScale * 18,
  },
});
