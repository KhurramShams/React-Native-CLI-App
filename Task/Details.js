import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const DetailScreen = ({ route }) => {
    const { item } = route.params;
  
    if (!item) {
      return <Text style={styles.errorText}>Item not found!</Text>;
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.detailText}>Name: {item.Id}</Text>
        <Text style={styles.detailText}>Name: {item.Name}</Text>
        <Text style={styles.detailText}>Detail: {item.Email}</Text>

      </View>
    );
  };
  

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        padding: 50,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    }, itemText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default DetailScreen;