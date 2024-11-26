import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';



function Class_Two() {

    const users = [
        {
            id: 1,
            name: 'qaseem',
            age: 12,
        },
        {
            id: 2,
            name: 'ali',
            age: 11,
        }
    ]

    return (
        <View>
            <Text>Hello</Text>

            {
                users.map((item) => (
                    <View key={item.id} >

                        <Text>{item.age}</Text>
                    </View>
                ))
            }
        </View>
    );
}

export default Class_Two;

