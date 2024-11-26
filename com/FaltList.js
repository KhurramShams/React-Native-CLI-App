/*import React, { useState }  from 'react';
import { View , Text, StyleSheet , TextInput,Button, FlatList, ScrollView } from 'react-native';
import HomeScreen from './HomeScreen';



function Falte_List(){

    const users = [
        {
          name:'qaseem',
          age:12,
        },
        {
          name:'ali',
          age:10,
        },{
          name:'majaz',
          age:11,
        },{
          name:'zubair',
          age:12,
        },{
          name:'abdullah',
          age:13,
        },
      ]
      const abc = ["asdd","sadsd","dsdd"]

    return(

        <View>

          <FlatList
          data={abc}
          renderItem={({item})=> <Text style={styles.Text} >{item}</Text>}
          />

          <ScrollView>
            {

            users.map((data) =>
            <View>
                <HomeScreen name={data.age} ></HomeScreen>
            </View> 
            )
        }
          </ScrollView>

        </View>

          );
}

export default Falte_List;

const styles=StyleSheet.create({
    Text:{
        fontSize:30,
        color:"#fff",
        borderWidth:2,
        bordercolor:"red",
        margin:10,
        backgroundColor:'grey',
        padding: 5
    }
})

*/

import React, { useState , useEffect}  from 'react';
import { View , Text, StyleSheet , TextInput,Button, FlatList, ScrollView } from 'react-native';
import Second_Com from './First';
function First_Com(props){

  useEffect(()=>{
    console.warn('Second Screen')
  },[ ])

  return(
    <View>
      <Second_Com Data={props.Count} ></Second_Com>
    </View>

  );

}
export default First_Com;