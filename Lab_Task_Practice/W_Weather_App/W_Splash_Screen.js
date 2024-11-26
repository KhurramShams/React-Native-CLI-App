import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';




const W_Splish_App = ({navigation}) => {
 
 
  useEffect(() => {
    setTimeout(()=>{
      navigation.replace('W_Home');
    },3000)
  },[navigation])

  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/weather-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.appName}>WeatherBug</Text>
      <Text style={styles.tagline}>Your City Weather Is Cool Now 😀</Text>
      <Text style={styles.devtagline}> Develop By Shams Shaikh</Text>
    </View>

  );
}

export default W_Splish_App;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#3e3b51',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 200
  },
  appName: {
    fontSize: 28,
    color: '#ffa806',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  tagline: {
    fontSize: 16,
    color: '#2f4974',
    marginTop: 10,
  },
  devtagline: {
    fontSize: 13,
    color: '#2f4974',
    marginTop: 0,
  },
});


