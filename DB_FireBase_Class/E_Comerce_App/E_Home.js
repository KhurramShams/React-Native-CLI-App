import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';

function E_Home_Screen({ navigation }) {
    const [Data, SetData] = useState('');

    const GetApi = async () => {
        const url = "https://mocki.io/v1/5640fc53-41ea-413a-b46e-a7a8116e6547";
        let result = await fetch(url);
        result = await result.json();
        SetData(result.categories);
    };

    useEffect(() => {
        GetApi();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stop And Shop</Text>
            <FlatList
                data={Data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.categoryCard}
                        onPress={() => navigation.navigate('E_Product', item.products)}
                    >
                        <Image
                            source={{ uri: 'https://via.placeholder.com/100' }} // Replace with category image URLs if available
                            style={styles.categoryImage}
                        />
                        <View style={styles.categoryDetails}>
                            <Text style={styles.categoryName}>{item.name}</Text>
                            <Text style={styles.categoryProductCount}>
                                {item.products.length} Products
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
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
