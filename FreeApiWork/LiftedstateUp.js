import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// InputComponent: Gets input from the user and updates the parent component's state
const InputComponent = ({ onInputChange }) => {
  const [input, setInput] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={input}
        onChangeText={(text) => {
          setInput(text);
          onInputChange(text); // Call the parent function to update state
        }}
      />
    </View>
  );
};

// DisplayComponent: Displays the value passed down from the parent component
const DisplayComponent = ({ text }) => {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayText}>You entered: {text}</Text>
    </View>
  );
};

// Parent component
const MyComponent = () => {
  const [sharedText, setSharedText] = useState(''); // Lifted state

  return (
    <View style={styles.container}>
      {/* Pass a function to InputComponent to allow it to update the state */}
      <InputComponent onInputChange={setSharedText} />

      {/* Pass the sharedText state to DisplayComponent to display it */}
      <DisplayComponent text={sharedText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
  },
  displayContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  displayText: {
    fontSize: 18,
    color: '#333',
  },
});

export default MyComponent;
