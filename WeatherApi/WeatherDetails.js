import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView, Pressable } from 'react-native';

const WeatherDetail = ({navigation, route}) => {

    const { cityName } = route.params; // Get the city name from navigation params
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(true);
    
    const GetApi = async () => {
       
        const link= `https://api.weatherapi.com/v1/current.json?key=19ab8053083a4d71b8695623240710&q=${cityName}&aqi=yes`; 
        let result = await fetch(link);
        result = await result.json();
        setData(result);
        setLoading(false);  
    }
    useEffect(() => {
        GetApi();
    }, [cityName]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#FFA500" />
                <Text style={styles.loadingText}>Fetching Weather Data...</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                <Pressable onPress={()=>navigation.navigate('HomeScreen')} >
                <Text style={styles.headerText}>Back Home</Text>
                            </Pressable>
                    
                </View>

                {/* Current Weather */}
                <View style={styles.currentWeather}>
                    <Text style={styles.cityName}>{data.location.name}</Text>
                    <Text style={styles.temperature}>{data.current.temp_c}°C</Text>
                    <Image
                        source={{ uri: `http:${data.current.condition.icon}` }}
                        style={styles.weatherIcon}
                    />
                    <Text style={styles.conditionText}>{data.current.condition.text}</Text>
                </View>

                {/* Weather Details */}
                <View style={styles.weatherDetails}>
                    <Text style={styles.detailsText}>Humidity: {data.current.humidity}%</Text>
                    <Text style={styles.detailsText}>Wind Speed: {data.current.wind_kph} km/h</Text>
                    <Text style={styles.detailsText}>Air Quality Index (AQI): {data.current.air_quality.pm10.toFixed(2)}</Text>
                </View>

                {/* Six Boxes at the Bottom */}
                <View style={styles.bottomBoxesContainer}>
                    <View style={styles.row}>
                        <View style={styles.box}>
                            <Text style={styles.boxText}>UV Index</Text>
                            <Text style={styles.boxValue}>{data.current.uv}</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.boxText}>Pressure</Text>
                            <Text style={styles.boxValue}>{data.current.pressure_mb} mb</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.boxText}>Visibility</Text>
                            <Text style={styles.boxValue}>{data.current.vis_km} km</Text>
                        </View>
                        
                    </View>
                    <View style={styles.row}>
                        <View style={styles.box}>
                            <Text style={styles.boxText}>Feels Like</Text>
                            <Text style={styles.boxValue}>{data.current.feelslike_c}°C</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.boxText}>Wind Direction</Text>
                            <Text style={styles.boxValue}>{data.current.wind_dir}</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.boxText}>Precipitation</Text>
                            <Text style={styles.boxValue}>{data.current.precip_mm} mm</Text>
                        </View>

                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#3e3b51',
        padding: 5,
    },
    header: {
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#abaed3',
        borderRadius: 10,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 24,
        color: '#3e3b51',
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
        marginVertical: 10,
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

export default WeatherDetail;
