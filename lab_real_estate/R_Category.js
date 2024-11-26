
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native';

function R_Category({ navigation })  {

    
    const [Data,SetData]=useState("");

   const GetApi = async () => {
        const url = "https://mocki.io/v1/a7fe1b03-a667-47c4-ba9b-9468ee64e9fd";
        let result = await fetch(url);
        result = await result.json();
        SetData(result.categories);
    }

    useEffect(() => {
        GetApi();
    },);

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Real_Estate_Category </Text>
            <FlatList
                data={Data}
                keyExtractor={(item)=>item.type}

                renderItem={({ item }) => (

                    <TouchableOpacity 
                        style={styles.categoryCard}
                        onPress={() => navigation.navigate('R_Home', item.properties)}
                    >
                        <View style={styles.categoryDetails}>

                            <Text style={styles.categoryName}>{item.type}</Text>
                            <Text style={styles.categoryCount}>
                                {item.properties.length} Properties
                            </Text>
                            <Button  title='Press Me' onPress={() => navigation.navigate('R_Home', item.properties)}/>
                        
                        </View>
                    
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default R_Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    categoryCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    categoryImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    categoryDetails: {
        flex: 1,
        paddingLeft: 15,
        justifyContent: 'center',
    },
    categoryName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    categoryCount: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
});

