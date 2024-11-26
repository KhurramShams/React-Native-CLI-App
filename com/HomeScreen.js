import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  info=props.name
  info2='Ali'
  return (
    <View>
      <Text style={{fontSize:21}}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
 
});


export default HomeScreen;
