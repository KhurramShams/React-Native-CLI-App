import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

function SignupUser({ navigation }) {
  // State for each input field
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const CallFunction = async () => {


    if (!name || !age || !email || !password) {
      Alert.alert("Please fill in all fields.");
      return;
    }


    const data = {
      name,
      age: parseInt(age),
      email,
      password,
    };

    try {
      const url = "http://192.168.0.100:3000/test"; 

      let result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),

      });

      if (result.ok) {
        const response = await result.json();
        console.warn(response);
        navigation.navigate('UserLogin');
      } else {
        Alert.alert("Failed to create account. Please try again.");
      }
    } catch (error) {
      Alert.alert( "An error occurred while saving data.");
    }
  };

  const login = () => {
    navigation.navigate('UserLogin');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creating New Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Set Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Signup" onPress={CallFunction} />
      <Text></Text>
      <Button title="Login" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black'
  },
  input: {
    color: 'black',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});

export default SignupUser;
