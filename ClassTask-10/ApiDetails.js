import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity,Image } from 'react-native';

const ApiDetails = ({ route }) => {
    const { cityName, date, condition, humidity } = route.params;

    return (
        <View >

            <View style={styles.row}>
                <View style={styles.box}>

                    <Text style={styles.boxText}>{cityName}</Text>

                </View>


            </View>

            <View style={styles.row}>
                <View style={styles.box}>

                    <Text style={styles.boxText}>{date}</Text>

                </View>
                <View style={styles.box}>

                    <Text style={styles.boxText}>{condition}</Text>

                </View>
                <View style={styles.box}>

                    <Text style={styles.boxText}>{humidity}</Text>

                </View>


            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#abaed3',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 250
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingHorizontal: 15,
        borderRadius: 5,
        color: '#FFFFFF',
    },
    searchButton: {
        backgroundColor: '#3e3b51',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    searchButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3e3b51',
    },
    loadingText: {
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 10,
    },
    currentWeather: {
        alignItems: 'center',
        marginVertical: 0,
    },
    cityName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#abaed3',
    },
    temperature: {
        fontSize: 48,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    weatherIcon: {
        width: 100,
        height: 100,
        //marginVertical: 10,
    },
    conditionText: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    weatherDetails: {
        marginTop: 10,
    },
    detailsText: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 5,
    },
    bottomBoxesContainer: {
        marginTop: 30,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    headerrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    box: {
        flex: 1,
        backgroundColor: '#abaed3',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginHorizontal: 5,
        marginTop: 15
    },
    boxText: {
        fontSize: 14,
        color: '#333333',
    },
    boxValue: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#333333',
    },
    normalText: {
        fontSize: 25,
        marginBottom: 10,
        color: '#abaed3',
        fontWeight: 'bold',
    },
});

export default ApiDetails;
