import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput,Button, TouchableOpacity } from 'react-native';


function E_Login_Screen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

            <Button style={styles.button} title="Login" onPress={() =>  navigation.navigate('E_Home')} />

                <TouchableOpacity onPress={() => navigation.navigate('E_SignUp') } >
            <Text style={styles.label}>Not Accout SignUp Now </Text>
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
        backgroundColor: '#333333',
    },
    label: {
        marginTop:10,
        fontSize: 16,
        marginBottom: 5,
        color: '#333333',
    },
    button:{
        marginTop:25,
        
    },
})
