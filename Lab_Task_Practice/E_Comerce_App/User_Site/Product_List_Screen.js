import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';

// Firebase configuration and initialization
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

// Firebase config object
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase only once
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

const db = getFirestore(app);

function Product_List_Screen() {
    const userId = 'YQ3oxaoAgGgYZRnJTdTCQs5Ig7y2'; // Static user ID
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productsCol = collection(db, `users/${userId}/products`);
        const unsubscribe = onSnapshot(productsCol, (querySnapshot) => {
            const userProducts = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(userProducts);
            setLoading(false);
        }, (error) => {
            console.error('Error fetching products:', error);
        });
        return unsubscribe;
    }, [userId]);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#007bff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User's Products</Text>
            {products.length === 0 ? (
                <Text style={styles.noProductsText}>No products found for this user.</Text>
            ) : (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.productCard}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productDescription}>{item.description}</Text>
                            <Text style={styles.productPrice}>${item.price}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

export default Product_List_Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noProductsText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
    },
    productCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    productPrice: {
        fontSize: 16,
        color: '#007bff',
    },

});