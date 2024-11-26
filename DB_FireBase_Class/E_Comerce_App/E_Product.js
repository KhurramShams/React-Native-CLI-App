import React from 'react';
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';

function E_Product_Screen({ route }) {
    const products = route.params;

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.productCard}>
                        <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productDescription}>{item.description}</Text>
                            <Text style={styles.productPrice}>Price: ${item.price}</Text>
                            <Text style={styles.productRating}>Rating: {item.rating} ★</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

export default E_Product_Screen;

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
    productDetails: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'space-around',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    productDescription: {
        fontSize: 14,
        color: '#777',
    },
    productPrice: {
        fontSize: 16,
        color: '#e91e63',
        fontWeight: 'bold',
    },
    productRating: {
        fontSize: 14,
        color: '#ffb400',
    },
});
