import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
             navigation.replace('ClassTask');
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>

            <Image
                source={require('./assets/weather-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.appName}>WeatherApp</Text>
            <Text style={styles.tagline}>Your City Weather Is Cool Now 😀</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       // backgroundColor: '#3e3b51',
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

export default Splash;
