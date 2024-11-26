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

const FitnessTracker = () => {
  const [exercises, setExercises] = useState([]); // State to store the list of exercises
  const [exerciseName, setExerciseName] = useState(''); // State for the exercise name input
  const [duration, setDuration] = useState(''); // State for duration input
  const [calories, setCalories] = useState(''); // State for calories input
  const [date, setDate] = useState(''); // State for date input

  // Load exercises from AsyncStorage when the component mounts
  useEffect(() => {
    loadExercisesFromStorage();
  }, []);

  // Function to load exercises from AsyncStorage
  const loadExercisesFromStorage = async () => {
    try {
      const storedExercises = await AsyncStorage.getItem('@exercises');
      if (storedExercises !== null) {
        setExercises(JSON.parse(storedExercises)); // Load exercises into state if they exist
      }
    } catch (error) {
      console.error('Error loading exercises:', error);
    }
  };

  // Function to save exercises to AsyncStorage
  const saveExercisesToStorage = async (exercisesToSave) => {
    try {
      await AsyncStorage.setItem('@exercises', JSON.stringify(exercisesToSave));
    } catch (error) {
      console.error('Error saving exercises:', error);
    }
  };

  // Function to add a new exercise log
  const addExercise = () => {
    if (exerciseName === '' || duration === '' || calories === '' || date === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    const newExercise = {
      id: Date.now().toString(),
      exerciseName,
      duration,
      calories,
      date,
    };
    const updatedExercises = [...exercises, newExercise];
    setExercises(updatedExercises); // Update state with new exercise
    saveExercisesToStorage(updatedExercises); // Save exercises to AsyncStorage
    setExerciseName(''); // Clear input fields
    setDuration('');
    setCalories('');
    setDate('');
  };

  // Function to remove an exercise log
  const removeExercise = (id) => {
    const updatedExercises = exercises.filter((exercise) => exercise.id !== id);
    setExercises(updatedExercises); // Update state
    saveExercisesToStorage(updatedExercises); // Save updated exercises to AsyncStorage
  };

  return (
    <View style={styles.container}>
      {/* Form to add new exercises */}
      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={exerciseName}
        onChangeText={setExerciseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (minutes)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Calories Burned"
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Add Exercise" onPress={addExercise} />

      {/* FlatList to display exercises */}
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.exerciseItem}>
            <View style={styles.exerciseTextContainer}>
              <Text style={styles.exerciseName}>{item.exerciseName}</Text>
              <Text>Duration: {item.duration} minutes</Text>
              <Text>Calories Burned: {item.calories}</Text>
              <Text>Date: {item.date}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeExercise(item.id)}
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
  exerciseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
  },
  exerciseTextContainer: {
    flex: 1,
  },
  exerciseName: {
    fontWeight: 'bold',
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

export default FitnessTracker;
