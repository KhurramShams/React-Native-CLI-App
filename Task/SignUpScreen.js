import React, { useState }  from 'react';
import { View , Text, StyleSheet , TextInput,Button } from 'react-native';

function SignUpScreen({navigation}){

  return (
<View>
  <View style={styles.container}>
      <Text style={styles.title}> Creating New Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
      />
         <TextInput
        style={styles.input}
        placeholder="Phone No"
      />
         <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Set Password"
        secureTextEntry
      />
      <Button title="Signup" onPress={() => navigation.navigate('Login') } />
    </View>
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
        padding:50,
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 2,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 55,
      },
  });

export default SignUpScreen;