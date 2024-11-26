
import React, { useState, useEffect } from 'react';
import { Text, View ,StyleSheet,Image} from 'react-native';

function R_Data({route}) {
    const properties = route.params;
  return (
    <View>
        <Text style={styles.propertyName}> {properties.name} </Text>
        <View>
        <Image source={{ uri: properties.image_url }} style={styles.productImage} />
        </View>
        <View>
            <Text style={styles.title}> Detailes</Text>
        <Text style={styles.propertyId}> Property Id : {properties.id} </Text>
        <Text style={styles.propertyAdress}> Property Adress : {properties.address} </Text>
       
       <View>
       <Text style={styles.propertyOwner}> Property Owner Name : {properties.owner.name} </Text>
       <Text style={styles.propertyOwner}> Property Owner Phone : {properties.owner.phone} </Text>
         
       </View>
        </View>
    </View>
  );
}

export default R_Data;


const styles = StyleSheet.create({
    title:{
        margin:15,
        borderRadius:14,
        backgroundColor:'#777',
        textAlign:'center',
        fontSize:35,
        color: 'white',
    },
    propertyImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    propertyName: {
        marginTop:15,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign:'center'
    },
    propertyDescription: {
        fontSize: 14,
        color: '#777',
    },
    propertyId: {
      margin:15,
        backgroundColor:'#777',
        fontSize:25,
        color: 'white',

    },
    propertyOwner: {
        fontSize: 20,
        color: '#333',
        fontWeight: 'bold',
    },
    propertyAdress: {
        fontSize: 20,
        color: '#333',
        fontWeight: 'bold',
    },
});
