import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, ScrollView } from 'react-native';
import HomeScreen from './HomeScreen';

const DetailsScreen = () => {

  const abc=[
    {
      N: 'Ali',
      Id: 1
    },
    {
      N:'Khan',
      Id: 2
    },
    {
      N: 'Uza',
      Id: 3
    },
    {
      N: 'Ibarhi',
      Id: 4
    },
    {
      N: 'Uza',
      Id: 5
    },
    {
      N: 'Ibarhi',
      Id: 6
    },
  ]


  return (
    <View>

{
      abc.map( (item)=>
      <View> 
      <Text style={styles.TextBox} >{item.N}</Text> 
      <Text style={styles.TextBox}> { item.Id } </Text>
      </View>
      )
      
}
    </View>
  );
};

const styles = StyleSheet.create({
  TextBox: {
    fontSize: 21,
    color:'white',
    borderColor:'purple',
    borderWidth: 2,
    borderRadius:5,
    padding:12,
    margin:10,
    backgroundColor:'grey'

  },
});

export default DetailsScreen;
