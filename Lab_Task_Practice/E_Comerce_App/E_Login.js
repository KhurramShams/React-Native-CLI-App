import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

function E_Login_Screen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Login function with Firebase Authentication
    const handleLogin = async () => {
       
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password');
            return;
        }
        
        try {

            await auth().signInWithEmailAndPassword(email, password);
            
            navigation.navigate('E_Home');
        } catch (error) {

                Alert.alert('Error', 'Something went wrong. Please try again!');
            
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
            />

            <Button style={styles.button} title="Login" onPress={handleLogin} />

            <TouchableOpacity onPress={() => navigation.navigate('E_SignUp')}>
                <Text style={styles.label}>Don't have an account? Sign Up Now</Text>
            </TouchableOpacity>
        </View>
    );
}

export default E_Login_Screen;

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333333',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    input: {
        height: 50,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#ffffff',
        color:'black'
    },
    label: {
        marginTop: 10,
        fontSize: 16,
        marginBottom: 5,
        color: '#333333',
    },
    button: {
        marginTop: 25,
    },
});
