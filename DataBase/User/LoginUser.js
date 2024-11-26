import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
  
    try {
      const url = "http://192.168.0.100:3000/test";
      let response = await fetch(url, {
        method: "GET",
      });
  
      if (!response.ok) {

        throw new Error("Network response was not ok.");

      }
  
      const result = await response.json();
      console.log("Server response:", result);
  
      const user = result.find(
        (user) => user.email === email && user.password === password
      );
  
      if (user) {
        Alert.alert("Login Success", "Welcome!");
        navigation.navigate("UserWellcome"); 
      } else {
        Alert.alert("Login Failed", "Incorrect email or password.");
      }
    } catch (error) {
     
      Alert.alert("Something went wrong. Please try again later.");
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    padding: 30,
    color:'black'
  },
  input: {
    color:'black',
    height: 46,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 18,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
});

export default LoginScreen;
