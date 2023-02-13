import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback, Platform } from 'react-native';

import React from 'react'

export const Header = () => {
   return (
      <View style={styles.header}>
         <Text style={styles.text}>List to do</Text>
      </View>
   )
}
const styles = StyleSheet.create({
   header: {
      paddingTop: 40,
      height: 100,
      backgroundColor: 'silver'
   },
   text: {
      fontSize: 18,
      color: 'red',
      textAlign: 'center'
   }
});
