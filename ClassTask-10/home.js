import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  Alert,
} from 'react-native';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [task, setTask] = useState(''); // State for the task input

  // Fetch tasks from AsyncStorage when the component mounts
  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  // Function to load tasks from AsyncStorage
  const loadTasksFromStorage = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks)); // Load tasks into state if they exist
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  // Function to save tasks to AsyncStorage
  const saveTasksToStorage = async (tasksToSave) => {
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(tasksToSave));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  // Function to add a new task
  const addTask = () => {
    if (task === '') {
      Alert.alert('Error', 'Please enter a task');
      return;
    }
    const newTask = { id: Date.now().toString(), text: task };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks); // Update state with new task
    saveTasksToStorage(updatedTasks); // Persist tasks to AsyncStorage
    setTask(''); // Clear input field
  };

  // Function to remove a task
  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); // Update state
    saveTasksToStorage(updatedTasks); // Persist updated task list to AsyncStorage
  };

  return (
    <View style={styles.container}>
      {/* Input field for adding new tasks */}
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask(task)} />

      {/* FlatList to display tasks */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <View style={styles.taskItem}>

            <Text>{item.text}</Text>

            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeTask(item.id)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
};

// Styling for the components
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
  },
  removeButton: {
    backgroundColor: '#ff4444',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
  },
});

export default TodoApp;
