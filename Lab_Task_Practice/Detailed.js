import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';



function Detailed_Class_3({ route }) {
    const { item } = route.params;
    return (
        <View>
            <Text style={styles.heading}>
                Detail About {item.id}
            </Text>
            <Text style={styles.title}>
                Title : {item.title}
            </Text>
            <Text style={styles.detail}>
                {item.body}
            </Text>
        </View>
    );
}

export default Detailed_Class_3;


const styles = StyleSheet.create({
    detail: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333333',
    },
    container: {
        flex: 1,
        padding: 10,
    },
    heading: {
        fontSize: 20,
        color: '#333333',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});
