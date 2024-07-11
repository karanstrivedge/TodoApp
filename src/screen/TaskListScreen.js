import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTodo, loadTodos, markDone} from '../redux/action';
import Header from '../components/HeaderComponents';
import {color, imagePath, Screen} from '../Helper/Constants';
import NoDataFound from '../components/NodataFound';
import moment from 'moment';

const TaskListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredTodos(
        todos.filter(todo =>
          todo.task.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    } else {
      setFilteredTodos(todos);
    }
  }, [searchQuery, todos]);

  const handleDelete = id => {
    Alert.alert('Delete', 'Are you sure want to delete task?', [
      {
        text: 'NO',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => dispatch(deleteTodo(id))},
    ]);
  };

  const handleDoneTask = id => {
    Alert.alert('Confirmation', 'Have you completed this task?', [
      {
        text: 'NO',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => dispatch(markDone(id))},
    ]);
  };

  return (
    <>
      <Header
        title={'Task Details'}
        navigation={navigation}
        isBack={false}
        isAdd={true}
      />
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search tasks..."
          placeholderTextColor={color.primary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {filteredTodos.length === 0 ? (
          <NoDataFound />
        ) : (
          <FlatList
            data={filteredTodos}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              if (!item?.done) {
                return (
                  <View style={styles.cardContainer}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{width: Screen.width / 1.3}}>
                        <Text style={styles.taskTitle}>{item.task}</Text>
                        <View style={styles.contain}>
                          <Image
                            source={imagePath.calendar}
                            style={styles.icon}
                          />
                          <Text style={styles.dateStyle}>
                            {new Date(item.date).toLocaleDateString()}
                          </Text>
                        </View>
                        <View style={styles.contain}>
                          <Image source={imagePath.clock} style={styles.icon} />
                          <Text style={styles.dateStyle}>
                            {moment(new Date(item.time)).format('hh:mm A')}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.sideView}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('AddEditTodo', {
                              todo: item,
                              type: 'EDIT',
                            })
                          }>
                          <Image source={imagePath.edit} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                          <Image
                            source={imagePath.delete}
                            style={styles.icon}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handleDoneTask(item.id)}>
                          <Image source={imagePath.done} style={styles.icon} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }
            }}
          />
        )}
      </View>
    </>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, padding: 20, backgroundColor: color.bgcolor},
  searchBar: {
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    fontSize: Screen.fontScale * 18,
    color: color.primary,
  },
  cardContainer: {
    backgroundColor: color.white,
    padding: Screen.width / 20,
    marginBottom: Screen.width / 40,
    elevation: 3,
    borderRadius: 10,
  },
  taskTitle: {
    fontSize: Screen.fontScale * 18,
    color: color.primary,
    paddingBottom: 5,
    maxWidth: Screen.width / 1.5,
    fontWeight: '400',
  },
  dateStyle: {
    fontSize: Screen.fontScale * 15,
    color: color.primary,
  },
  timeStyle: {
    fontSize: Screen.fontScale * 15,
    color: color.primary,
  },
  icon: {
    width: Screen.width / 25,
    height: Screen.width / 25,
    marginRight: 10,
    tintColor: color.gray,
  },
  contain: {flexDirection: 'row', alignItems: 'center', paddingVertical: 5},
  sideView: {
    width: Screen.width / 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
