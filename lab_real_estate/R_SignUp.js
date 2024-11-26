
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Image, Button } from 'react-native';

function R_SignUp({navigation}) {

  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");


  return (
    <View>
      <View style={styles.logo}>
        <Image
          source={require('./Pics/download.jpeg')}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputcontainer}>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={Name}
          onChangeText={setName}
          placeholder="Enter Your Name"
          keyboardType="name"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={Email}
          onChangeText={setEmail}
          placeholder="Enter Your Email"
          keyboardType="email"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={Password}
          onChangeText={setPassword}
          placeholder="Enter your Password"
          keyboardType="password"
        />
      </View>
      <View style={styles.inputcontainer}>
        <Button style={styles.button} title='SignUp' onPress={()=>  navigation.navigate('R_Login')}/>
      </View>
    </View>
  );
}

export default R_SignUp;


const styles = StyleSheet.create({
  logo: {
    //width: 200,
    //height: 200,
    //marginTop: 250
    textAlign: 'center',
    marginLeft: 25,
    marginTop: 25
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333333',
  },
  container: {
    flex: 1,
  },
  inputcontainer: {
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#333333',
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    marginBottom: 5,
    color: '#333333',
  },
  button: {
    marginTop: 15,

  },
})
