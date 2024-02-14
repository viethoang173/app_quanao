/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */ 
// import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './containers/home/home.js';



import Login from './containers/account/login.js';


// import Detail from './containers/home/detail.js';
const Stack = createNativeStackNavigator();
// const Stack = createDrawerNavigator();

function Screens() {
  // const [showSplash, setshowSplash] = useState(true);
  // const [appID, setAppID] = useState('-');

  // const storeAppID = async (value) => {
  //     try {
  //     await AsyncStorage.setItem('appID', value);

  //     } catch (e) {
  //     // saving error
  //     }
  // }

  // const getAppID = async () => {
  //     try {
  //         var value = await AsyncStorage.getItem('appID');

  //         if(value !== null) {
  //             // value previously stored
  //             setAppID(value);
  //         }
  //         else
  //         {
  //             var resp = await fetch(Config.get_app_id_api_url, {
  //                 method: 'POST',
  //                 headers: {
  //                     'Accept': 'application/json',
  //                     'Content-Type': 'application/json',
  //                 },
  //             });

  //             const appdata = await resp.json();
  //             storeAppID(appdata.appid);
  //             setAppId(appdata.appid);
  //         }
  //     } catch(e) {
  //     // error reading value
  //     }
  // }

  // getAppID();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setshowSplash(false);
  //   }, 3000);
  // }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, drawerLabel: "Đăng nhập" }} />
       
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, drawerLabel: "Trang chính" }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screens;


{/* 
          <Stack.Screen name="Detail" component={Detail} options={{headerShown: false, drawerLabel:"Trang Detail"}} />
          initialRouteName="Splash"
          drawerContent={(props) => <CustomSidebarMenu {...props} />}>
  
          {
            showSplash ?
              <Stack.Screen
                name="Splash"
                options={{animationEnabled: false, headerShown: false}}
                component={SplashScreen} />
            : null 
          }*/}




{/* <Stack.Screen name="NewsList" component={NewsList} options={{headerShown: false, drawerItemStyle: { display: 'none' }}} />
          <Stack.Screen name="NewsDetail" component={NewsDetail} options={{headerShown: false, drawerItemStyle: { display: 'none' }}} />
          <Stack.Screen name="Datlich" component={Datlich} options={{headerShown: false, drawerItemStyle: { display: 'none' }}} />
          <Stack.Screen name="Search" component={Search} options={{headerShown: false, drawerItemStyle: { display: 'none' }}} />
          <Stack.Screen name="SearchResults" component={SearchResults} options={{headerShown: false, drawerItemStyle: { display: 'none' }}} />
          <Stack.Screen name="Favourites" component={Favourites} options={{headerShown: false, drawerLabel:"Danh sách yêu thích"}} /> */}