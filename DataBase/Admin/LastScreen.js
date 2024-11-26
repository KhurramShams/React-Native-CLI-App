import React, { useState, useEffect } from 'react';
import { Text, View ,StyleSheet} from 'react-native';


function LastScreen({navigation}) {

    return (
     <View style={styles.container} >

        <Text> Updated </Text>
     
     </View>
  
    );
}
  
  export default LastScreen;

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
    },})