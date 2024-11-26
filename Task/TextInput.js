import React, { useState }  from 'react';
import { View , Text, StyleSheet , TextInput,Button } from 'react-native';

function TextInputScreen(){
    const [text,setText]=useState('');

  return (
<View>
  <View style={styles.container}>
      <Text style={styles.title}>Text Input</Text>

      <Text>Enter Name</Text>
      <TextInput style={styles.input}  placeholder='Enter Name' onChangeText={(val)=> setText(val)} />
    </View>
    <Text>{text}</Text>
    <Button title='Enter Now' onPress="press " ></Button>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        padding:50,
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
  });

export default TextInputScreen;