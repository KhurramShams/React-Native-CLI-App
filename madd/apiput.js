import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

const UpdateData = () => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const updateData = async () => {
    
      const data = {
        name,
        email
      };

      const url = `http://192.168.100.9:3000/test/${userId}`;

      let result = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      result = await result.json();
      console.warn('Updated Data:', result);
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={userId}
        onChangeText={(text)=>setUserId(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text)=>setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text)=>setEmail(text)}
        keyboardType="email-address"
      />
      <Button title="Update Data" onPress={updateData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default UpdateData;
