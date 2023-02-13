
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

export const Form = ({addHandler}) => {
   const [text, setText] =useState('')
   const onChange = (text) => {
      setText(text);
   }
   

   return (
      <View>
         <TextInput style={styles.input} onChangeText={onChange} placeholder='write task..'/>
         <Button style={styles.button}  title='add task' onPress={()=> addHandler(text)}  />
      </View>
   )
}
const styles = StyleSheet.create({
   input: {
      borderBottomWidth: 1,
      padding: 10,
      marginVertical:30,
      marginHorizontal:'20%',
      width:'60%'
   },
   button:{
      color:'green',
      width: '60%'
   }
})