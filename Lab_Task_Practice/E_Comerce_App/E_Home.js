import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

function E_Home_Screen({ navigation }) {
    const categories = [
        { name: 'Furniture', imageUrl: 'https://via.placeholder.com/100' },
        { name: 'Health and Beauty', imageUrl: 'https://via.placeholder.com/100' },
        { name: 'Fashion and Apparel', imageUrl: 'https://via.placeholder.com/100' },
        { name: 'Shoes', imageUrl: 'https://via.placeholder.com/100' }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stop And Shop</Text>
            {categories.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.categoryCard}
                    onPress={() => navigation.navigate('UploadProduct', { category: category.name })}
                >
                    <Image
                        source={{ uri: category.imageUrl }}
                        style={styles.categoryImage}
                    />
                    <View style={styles.categoryDetails}>
                        <Text style={styles.categoryName}>{category.name}</Text>
                        <Text style={styles.categoryProductCount}>Products</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default E_Home_Screen;

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
    categoryProductCount: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
});
