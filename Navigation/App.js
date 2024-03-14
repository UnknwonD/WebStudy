import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/authStack/Login";
import Signup from "./src/authStack/Signup";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Setting from "./src/homeTab/Setting";
import { authService } from "./fbase";
import { Button, Text, View } from "react-native";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import Home from "./src/homeTab/Home";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
      } else{
        setIsLoggedIn(false);
      }
    });
  }, []);

    return(
      <>
      { isLoggedIn ? (
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Setting' component={Setting} />
          </Tab.Navigator>
        </NavigationContainer> 
        ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
      </>
    );
};


export default App;
