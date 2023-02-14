import Main from "./components/Main";
import Contact from "./components/Contact";
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { StyleSheet } from "react-native";

export default function Navigate() {
   const Stack = createStackNavigator();
   return (

      <NavigationContainer>

         <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} 
            options={{ title: 'Main', cardStyle: style.header }} />
            {/* <Stack.Screen name="Main">
               {(props) => <Main {...props} extraData={someData} />}
            </Stack.Screen> */}
            <Stack.Screen name="Contact" component={Contact} options={{ title: 'Contact' }} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}
const style = StyleSheet.create({
   header: {
      backgroundColor: 'red',
      borderColor: 'yellow'
   }
})