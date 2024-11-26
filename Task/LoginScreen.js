import React, { useState }  from 'react';
import { View , Text, StyleSheet , TextInput,Button } from 'react-native';


function LoginScreen({navigation}){

  return (
<View>
  <View style={styles.container}>
      <Text style={styles.title}>Login Page </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
    <Button title="Login" onPress={() => navigation.navigate('Home')} />
      <Text></Text>
      <Button title="Create new account"  onPress={() => navigation.navigate('Signup')} />
    </View>
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
        padding:30,
      },
      input: {
        height: 46,
        borderColor: '#ccc',
        borderWidth: 2,
        marginBottom: 18,
        paddingHorizontal: 10,
        borderRadius: 50,
      },
  });

export default LoginScreen;