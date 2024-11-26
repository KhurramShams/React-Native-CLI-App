import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

function Middle_Screen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the App</Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('User_Home')}  // Navigate to User's Site
            >
                <Text style={styles.buttonText}>Go to User Site</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('E_Login')}  // Navigate to Admin's Site
            >
                <Text style={styles.buttonText}>Go to Admin Site</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Middle_Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333333',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        width: '80%',
        marginBottom: 15,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
