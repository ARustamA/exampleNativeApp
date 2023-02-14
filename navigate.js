import Main from "./components/Main";
import FullNews from "./components/FullNews";
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
               options={{
                  title: 'Main',
                  headerStyle: style.header, 
                  headerTitleStyle: {
                     color: 'blue', textAlign: 'center'},
                     headerTitleAlign: 'center'
               }} />
            {/* <Stack.Screen name="Main">
               {(props) => <Main {...props} extraData={someData} />}
            </Stack.Screen> */}
            <Stack.Screen name="FullNews" component={FullNews}
               options={{ title: 'FullNews', headerTitleAlign: 'center' }} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}
const style = StyleSheet.create({
   header: {
      backgroundColor: '#eb5b3b',
      borderBottomColor: 'yellow',
      
   }
})