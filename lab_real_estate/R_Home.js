
import React, { useState, useEffect } from 'react';
import { Text, View ,StyleSheet,FlatList,Image, Button} from 'react-native';

function R_Home({navigation, route}) {
    const properties = route.params;
  return (
    <View style={styles.container}>
    <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.productCard}>

                <Image source={{ uri: item.image_url }} style={styles.productImage} />

                <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Button title='Detailes' onPress={() => navigation.navigate('R_Data', item)} />
                </View>
                
            </View>
        )}
    />
</View>
  );
}

export default R_Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f9fa',
    },
    productCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});