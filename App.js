import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { authService } from "./fbase";
import Login from "./src/authStack/Login";
import Signup from "./src/authStack/Signup";
import Home from "./src/homeStack/Home";
import Chart from "./src/homeStack/Chart"
import Setting from "./src/homeStack/Setting";

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
  <HomeStack.Navigator>
    <HomeStack.Screen 
      name="Home" 
      component={Home}
      options={{
        headerShown:false,
      }}
    />
    <HomeStack.Screen 
      name="Chart" 
      component={Chart}
      options={{
        headerShown:false,
      }}
    />
  </HomeStack.Navigator>
  );
};

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
          <Tab.Navigator initialRouteName="HomeStackScreen">
            <Tab.Screen 
              name='Home' 
              component={HomeStackScreen} 
              options={{
                headerShown:false,
              }}
            />
            <Tab.Screen 
              name='Setting' 
              component={Setting} 
              options={{
                headerShown:false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer> 
        ) : (
        <NavigationContainer>
          <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Signup" component={Signup} />
          </AuthStack.Navigator>
        </NavigationContainer>
      )}
      </>
    );
};


export default App;
