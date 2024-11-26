import React, { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';



function Calss_One() {
    const [count, setcount] = useState(0);

    // useEffect(() => {
    //     console.warn("Count Update" )
    // },[count])

    

    const calculate = () => {
        setcount(count + 1);
    }

    const abc = [
        {
            id: 1,
            name: "Qaseem",
            email: "qaseem@gmail.com",
            data: ["aa", "bb", "cc"]

        },
        {
            id: 2,
            name: "Abc",
            email: "abc@gmail.com",
            data: ["aa1", "bb1", "cc1"]


        }, {
            id: 3,
            name: "Aa",
            email: "aa@gmail.com",
            data: ["aa2", "bb2", "cc2"]
        }
    ]
    return (
        <View style={styles.container}>

            <Text>Hello I am Class One </Text>


            <FlatList
                data={abc}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.box}>
                        <Text style={styles.Text}> {item.id} . {item.name}  {item.data[2]} , {count}</Text>
                        <Button title=' Pres Me' onPress={calculate} />
                    </View>
                )}
            />
 <User ontapchnage={calculate}/>
        </View>
    );
};
const User = ({ ontapchnage }) => {
    useEffect(() => {
      console.warn("User Component Mounted");
    }, [ontapchnage]);
  
    return (
      <View>
        <Button title='Press For 1' onPress={ontapchnage} />
      </View>
    );
  };
export default Calss_One;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 5,

    },
    box: {
        flex: 1,
        width: 180,
        height: 60,
        margin: 15,
        backgroundColor: 'blue',
        
    },
    Text: {
        fontSize: 18,
        //backgroundColor: 'red',

    }

});