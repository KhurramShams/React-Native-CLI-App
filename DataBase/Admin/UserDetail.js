// UserDetail.js
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

function UserDetail({ route, navigation }) {
  const { user } = route.params;

  const handleDelete = async () => {

    const url = `http://192.168.0.100:3000/test/${user.id}`;

    try {

      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (response.ok) {
        Alert.alert("Success", "User deleted successfully.");
        navigation.goBack(); 
      } else {
        Alert.alert("User not found or deletion failed.");
      }
    } catch (error) {
      Alert.alert("An error occurred while deleting the user.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>
      <Text style={styles.detailText}>Name: {user.name}</Text>
      <Text style={styles.detailText}>Email: {user.email}</Text>
      <Text style={styles.detailText}>Age: {user.age}</Text>
      <Text style={styles.detailText}>ID: {user.id}</Text>

      {/* Delete Button */}
      <Button title="Delete" color="red" onPress={handleDelete} />

      {/* Placeholder for Update Button */}
      <Text style={styles.spacer}></Text>
      <Button title="Update" onPress={() => {}} />
    </View>
  );
}

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  spacer: {
    marginVertical: 10,
  },
});
