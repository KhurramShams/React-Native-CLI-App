//import React, { useState, useEffect } from 'react';
//import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
//import AppRouts from './WeatherApi/AppRouts';
/*
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Home" component={TaskHome} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function App() {

  return (
    <View>
      <AppRouts></AppRouts>
    </View>
  );
}



export default App;
*/



 // ------ E Comerce App Data 
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import E_Home_Screen from './Lab_Task_Practice/E_Comerce_App/E_Home';
import E_Login_Screen from './Lab_Task_Practice/E_Comerce_App/E_Login';
import E_Product_Screen from './Lab_Task_Practice/E_Comerce_App/User_Site/Product_List_Screen';
import E_SignUp_Screen from './Lab_Task_Practice/E_Comerce_App/E_SignUp';
import UploadProductScreen from './Lab_Task_Practice/E_Comerce_App/UploadProductScreen';
import Middle_Screen from './Lab_Task_Practice/E_Comerce_App/Middel_Screen';
import User_Home_Screen from './Lab_Task_Practice/E_Comerce_App/User_Site/User_Home';
import Product_List_Screen from './Lab_Task_Practice/E_Comerce_App/User_Site/Product_List_Screen';


const Stack = createNativeStackNavigator();
function App() {
  
  return ( 

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Middle_Screen">

        <Stack.Screen name="E_Home" component={E_Home_Screen} />
        <Stack.Screen name="E_Login" component={E_Login_Screen} />
        <Stack.Screen name="E_SignUp" component={E_SignUp_Screen} />
        <Stack.Screen name="ProductList" component={Product_List_Screen} />
        <Stack.Screen name="UploadProduct" component={UploadProductScreen} />

        <Stack.Screen name="Middle_Screen" component={Middle_Screen} />
        <Stack.Screen name="User_Home" component={User_Home_Screen} />
        

      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default App;




// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';
// import FileNo1 from './DataBase/FileNo1';
// import LoginScreen from './DataBase/User/LoginUser';
// import SignupUser from './DataBase/User/SignupUser';
// import WellCome from './DataBase/User/Wellcome';
// import Splash from './DataBase/User/Splash';
// import UserDetail from './DataBase/Admin/UserDetail';
// import LoginAdmin from './DataBase/Admin/LoginAdmin';
// import AdminHome from './DataBase/Admin/AdminHome';
// import LastScreen from './DataBase/Admin/LastScreen';


// function App() {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//     <Stack.Navigator initialRouteName="Splash">
//       <Stack.Screen name="Splash" component={Splash} />
//       <Stack.Screen name="Middle" component={FileNo1} />
//       <Stack.Screen name="UserLogin" component={LoginScreen} />
//       <Stack.Screen name="UserSignup" component={SignupUser} />
//       <Stack.Screen name="UserWellcome" component={WellCome} />

//       <Stack.Screen name="AdminLogin" component={LoginAdmin} />
//       <Stack.Screen name="AdminHome" component={AdminHome} />
//       <Stack.Screen name="UserDetail" component={UserDetail} />
//       <Stack.Screen name="LastScreen" component={LastScreen} />

//     </Stack.Navigator>
//   </NavigationContainer>
//   );
// }

// export default App;


