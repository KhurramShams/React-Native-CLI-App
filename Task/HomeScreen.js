import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

function TaskHome({navigation}) {
    const info = [
        {
            Id: 1,
            Name: 'Ali',
            Email: 'ali@gmail.com'
        },
        {
            Id: 2,
            Name: 'Khurram',
            Email: 'khurram@gmail.com'
        },
        {
            Id: 3,
            Name: 'Khan',
            Email: 'khan@gmail.com'
        },
    ];

    return (
        <View style={styles.container}>

            <FlatList 
                data={info} 
                renderItem={({ item }) => (
                    <View style={styles.listContainer}>
                        <Text style={styles.itemText}>{item.Name}</Text>
                        <Text></Text>
                        <Button title='See Deatils' onPress={() => navigation.navigate('Detail',{ item } ) }/>
                    </View>
                )} 
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    listContainer: {
        marginBottom: 15,
        padding: 17,
        backgroundColor: '#7F8A95',
        borderRadius: 20,
    },
    itemText: {
        color:'white',
        fontSize: 17,
        //fontWeight:'bold'
    },
});

export default TaskHome;
