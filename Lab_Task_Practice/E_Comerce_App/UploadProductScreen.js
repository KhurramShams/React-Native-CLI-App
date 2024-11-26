import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';  // Import Firebase Auth

function UploadProductScreen({ route, navigation }) {
    const { category } = route.params; // Get selected category
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImageUrl, setProductImageUrl] = useState('');

    const handleUploadProduct = async () => {
        if (!productName || !productDescription || !productPrice ) {
            Alert.alert('Error', 'Please fill in all the fields.');
            return;
        }

        try {

            const userId = auth().currentUser.uid;

            await firestore()
                .collection('users')  
                .doc(userId)  
                .collection('products')
                .add({
                    name: productName,
                    description: productDescription,
                    price: productPrice,
                    imageUrl: productImageUrl,
                    category: category,  
                    createdAt: firestore.FieldValue.serverTimestamp(),
                });

            Alert.alert('Success', 'Product uploaded successfully!');
            navigation.goBack(); 
        } catch (error) {
            Alert.alert('Error', 'Something went wrong. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upload Product for {category}</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Product Name"
                value={productName}
                onChangeText={setProductName}
            />
               <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                placeholder="Product Description"
                value={productDescription}
                onChangeText={setProductDescription}
            />
               <Text style={styles.label}>Price</Text>
            <TextInput
                style={styles.input}
                placeholder="Product Price"
                keyboardType="numeric"
                value={productPrice}
                onChangeText={setProductPrice}
            />

            <Button title="Upload Product" onPress={handleUploadProduct} />
        </View>
    );
}

export default UploadProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        height: 50,
        color:'black',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    label: {
        marginTop: 10,
        fontSize: 16,
        marginBottom: 5,
        color: '#333333',
    },
});
