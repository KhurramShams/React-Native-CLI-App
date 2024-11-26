
/*
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const ElectionMessage = () => {

  const handleVoteReminder = () => {
    Alert.alert("Mission Critical", "Don't forget to vote tomorrow! 🗳");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>🚨 ATTENTION: Code RED ALERT 🚨</Text>
      
      <Text style={styles.message}>

        <Text style={styles.bold}>Mission:</Text> 🗳 Operation U.R.T. (Unity Round Table) 🗳{"\n"}
        <Text style={styles.bold}>Objective:</Text> Secure ALL votes 💪{"\n"}
        <Text style={styles.bold}>Target:</Text> University Campus 🏫{"\n"}
        <Text style={styles.bold}>D-Day:</Text> TOMORROW! 📅{"\n"}
        <Text style={styles.bold}>Time:</Text> ALL DAY ⏰{"\n"}
        <Text style={styles.bold}>Your Role:</Text> Show up, cast your vote, and make history! 😎{"\n\n"}

        🎯 Mission Critical: Your presence = POWER! Let’s make U.R.T. the code to victory.{"\n"}
        ⚠️ Failure to attend = 🚫 NO VOTES = 💔 Sad U.R.T. crew! Don’t let that happen!{"\n\n"}

        Reminder: Bring your "VOTE US" energy and let’s turn the campus into a victory zone! 🔥{"\n"}
        #UnityIsTheCode #VoteForVictory #URTMissionSuccess

      </Text>

      <TouchableOpacity style={styles.button} onPress={handleVoteReminder}>
        <Text style={styles.buttonText}>Mission Reminder: Vote Tomorrow!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff0000',
    textAlign: 'center',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold', 
  },
});

export default ElectionMessage;


//----------->State Program<-----------//
/*
import React, { useState }  from 'react';
import { View , Text, StyleSheet , TextInput,Button } from 'react-native';
import First from './com/First';


function App(){

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [display, setdisplay] = useState(false);
const [printdata,setprintdata]=useState({
  Name: '',
  Email: '',
  Password: '',
});

const Showdata = ()=> {
  setprintdata({
    Name: name,
    Email: email,
    Password: password,
  });
  <Text>{printdata}</Text>
};

function Hidedata () {
  setEmail('');
  setName('');
  setPassword('');
  setprintdata({
    Name: '',
    Email: '',
    Password: '',
  });
};

  return (
<View>
  <First></First>
</View>
  );

  
}

export default App;

*/

import React, { useState , useEffect}  from 'react';
import { View , Text, StyleSheet , TextInput,Button, FlatList, ScrollView } from 'react-native';

function Second_Com(props){

  useEffect(()=>{
    console.warn('3rd Screen')
  },[props.Data])

  return(
    <View>
      <Text style={styles.title} >{props.Data}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    padding:30,
  },
});
export default Second_Com;