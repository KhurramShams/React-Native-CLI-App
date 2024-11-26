import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';

const R_Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
             navigation.replace('R_SignUp');
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>


            <Image
                source={require('./Pics/download.jpeg')}
                style={styles.logo}
            />

            <Text style={styles.appName}>Real-State</Text>
            <Text style={styles.tagline}> Your Property Is Our Property😀</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 250
    },
    appName: {
        fontSize: 28,
        //marginTop:550,
        color: '#ffa806',
        fontWeight: 'bold',
    },
    tagline: {
        fontSize: 16,
        color: '#2f4974',
        marginTop: 10,
    },
});

export default R_Splash;
