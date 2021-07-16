
import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import{ createStackNavigator } from "@react-navigation/stack";
import {createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import  OnboardingScreen from "./screens/OnboardingScreen";
import  LoginScreen from "./screens/LoginScreen";


import Attendance from "./screens/Attendance";
import LeaveScreen from "./screens/LeaveScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Home from "./screens/Home";

//import AsyncStorage from "react-native-community/async-storage";

const AppStack = createStackNavigator();

/*const App = () =>{
  const [isFirstLaunch, setFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunhed', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if ( isFirstLaunch === null ) {
    return null;
  } else if ( isFirstLaunch === true ) {
    return (
      
    );
  }
}
*/

const Tab = createMaterialBottomTabNavigator();

function TabScreen() {
  return (

      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={Attendance}
        options={{
          tabBarLabel: 'Attendance',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Leave"
        component={LeaveScreen}
        options={{
          tabBarLabel: 'Leave',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="minus-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


  function App()  {
    return (
    <NavigationContainer>
          <AppStack.Navigator
          headerMode="none">

              <AppStack.Screen name="Onboarding" component={OnboardingScreen} options={{headers:() => null}} />
                  
              <AppStack.Screen name="Login" component={LoginScreen}/>

              <AppStack.Screen name="Home" component={TabScreen}/>

          </AppStack.Navigator>

      </NavigationContainer>
      
    );
  } 

export default App;    
