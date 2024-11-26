import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';



function Class_Three({navigation}) {

    const [Data, Setdata] = useState(" ");

    const GetApi = async () => {

        const url = "https://jsonplaceholder.typicode.com/posts"
        let Result = await fetch(url)
        Result = await Result.json()
        console.warn("Data Found")
        Setdata(Result)
    }

    useEffect(() => {
        GetApi();
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>API DATA </Text>

            <View >

                <FlatList data={Data} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                    <View style={styles.box}>
                        <Text style={styles.Text} > {item.id} . {item.title} </Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail',{item}) }>
                            <Text style={styles.buttonText}>Read More</Text>
                        </TouchableOpacity>
                    </View>
                )} />

            </View>


        </View>
    );
}

export default Class_Three;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
    },
    box: {
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    Text: {
        fontSize: 16,
        color: '#333333',

    },
    heading: {
        fontSize: 20,
        color: '#333333',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },

});
