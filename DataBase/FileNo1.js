import React, { useState, useEffect } from 'react';
import { Text, View ,StyleSheet, Button} from 'react-native';


function FileNo1({navigation}) {

    return (
     <View style={styles.container} >

        <Text>Hello User</Text>
        <Button title='User Mode'  onPress={()=>  navigation.navigate('UserSignup')}></Button>
        <Text></Text>
        <Button title='Admin Mode'  onPress={()=>  navigation.navigate('AdminLogin')}></Button>
     
     </View>
  
    );
}
  
  export default FileNo1;

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
    },})