import React, { useState, useEffect } from 'react';
import { Text, View ,StyleSheet,Button} from 'react-native';


function WellCome({navigation}) {
  const login = ()=>{
    navigation.navigate('Middle');
  }

    return (
     <View style={styles.container} >


        <Text style={styles.title}>WellCome User</Text>
        <Button title="Back Home " onPress={login} />
     
     </View>
  
    );
}
  
  export default WellCome;

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color:'black'
    },
  })