import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

const App = () => { 
  const [userId, setUserId] = useState('');

  const deleteData = async () => {
      const url = `http://192.168.100.9:3000/test/${userId}`;

      let result = await fetch(url, {
        method: 'DELETE',
      });

      result = await result.json();
      console.warn('Deleted Data:', result);
     
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
        keyboardType="numeric"
      />
      <Button title="Delete Data" onPress={deleteData} />
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

export default App; 
