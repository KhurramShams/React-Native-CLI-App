
import React, { useState } from 'react';
import { FlatList, InteractionManager, ScrollView, StyleSheet,Text,View } from 'react-native';
function App() { 
  const abc = [
    { 
      id: 1,
      name: 'qaseem',
    },
    { 
      id: 2,
      name: 'qaseem',
    },
    { 
      id: 3,
      name: 'qaseem',
    },
    { 
      id: 4,
      name: 'qaseem',
    },
    { 
      id: 5,
      name: 'qaseem',
    },
    { 
      id: 6,
      name: 'qaseem',
    },
    { 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },{ 
      id: 6,
      name: 'qaseem',
    },
    
]
    return(
      
<View>
  <ScrollView>

  <View style={styles.Flexbox}>

{
  abc.map((item)=><Text style={styles.inside}>{[item.name]}</Text>)
}

  </View>
  </ScrollView>
  
</View>

  ) 
};

const styles = StyleSheet.create({
  Textbox:{
    fontSize:30,
    color:"#fff",
    borderWidth:2,
    bordercolor:"red",
    margin:10,
    backgroundColor:'grey'

  },
  Flexbox:
  {
flex:1,
flexDirection:'row',
flexWrap:'wrap'
    
  },
  inside:{
    fontSize:20,
    backgroundColor:'blue',
    color:'#fff',
    margin:5,
    padding:12,
    width:100,
    height:100
  }
})

export default App;
