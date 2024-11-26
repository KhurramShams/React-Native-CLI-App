import React, { useState }  from 'react';
import { View , Text, StyleSheet , TextInput,Button } from 'react-native';


function LoginAdmin({navigation}){

  const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");

    const handleNavigation =()=>{
        const id="1234"
        const password="1234"

        if (Id===id && Password===password){
            navigation.navigate('AdminHome')
        }
        else{
            console.warn("Failed");
        }
    }

  return (
<View>
  <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Id"
        autoCapitalize="none"
        value={Id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={Password}
        onChangeText={setPassword}
      />
    <Button title="Login"  onPress={handleNavigation}/>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
        padding:30,
        color:'black'
      },
      input: {
        height: 46,
        borderColor: '#ccc',
        borderWidth: 2,
        marginBottom: 18,
        paddingHorizontal: 10,
        borderRadius: 50,
      },
  });

export default LoginAdmin;