import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

function AdminHome({ navigation }) {
  const [users, setUsers] = useState([]);

  // Fetch users data from the server
  useEffect(() => {
    const fetchUsers = async () => {
      const url = "http://192.168.0.100:3000/test"; // Replace with your actual server URL

      try {
        let response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const result = await response.json();
          setUsers(result); // Assuming result is an array of user objects
        } else {
          Alert.alert("Error", "Failed to fetch users data from server.");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        Alert.alert("Error", "An error occurred while fetching users.");
      }
    };

    fetchUsers();
  }, []);

  // Render each user as a card
  const renderUser = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('UserDetail', { user: item })}
    >
      <Text style={styles.userName}>{item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Age: {item.age}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUser}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

export default AdminHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color:'black'
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailContainer: {
    color:'blue',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
    color:'black'
  },
});
