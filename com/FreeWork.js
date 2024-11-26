import React from 'react';
import { View, Text,StyleSheet, ScrollView } from 'react-native';

const FreeWork = (data) => {
    concept=data.data

    const info=['Sajjad','Adil','Ali']
  return (
    <View>
        <ScrollView> 
            {
                info.map((x) => <Text>{x}</Text>)
            }
        </ScrollView>
      <Text style={{fontSize:21}}>{concept}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
 
});


export default FreeWork;
