import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentToDo, setCurrentToDo] = useState('')

  useEffect (() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('todos');
        if (storedData) {
          setTodos(JSON.parse(storedData))
        }
      } catch (error) {
        console.log('Failed to fetch todos:', error)
      }
    }

    fetchData();
  }, []);

  const addTodo = async () => {
    if (currentToDo == '') {
      return
    }

    const newTodos = [...todos, currentToDo];

    try {
      await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
      setTodos(newTodos);
      setCurrentToDo('');
    } catch (error) {
      console.log("Failed to save Todos:", error)
    }
  }

  return (
    <View style={styles.container}>
        <TextInput style={styles.todoInput}
          value={currentToDo}
          onChangeText={setCurrentToDo}
          placeholder='Enter new ToDO'
        />
        <View style={styles.addButton}>
          <Button title='Add' onPress={addTodo} />
        </View>
        <FlatList style={styles.todoList}
          data={todos}
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'flex-start',
  },
  todoInput: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: '10%',
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 5,
  },
  addButton: {
    marginHorizontal: 10,
  },
  todoList: {
    marginTop: 15,
    marginHorizontal: 10,
  } 
});
