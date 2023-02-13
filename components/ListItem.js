
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const ListItem = ({ el, deleteHandler }) => {
   return (
      <TouchableOpacity onPress={()=> deleteHandler(el.key)}>
         <Text style={styles.text}>
            {el.text}

         </Text>
      </TouchableOpacity>
   )
}
const styles = StyleSheet.create({
   text: {
      padding: 20,
      textAlign: 'center',
      borderRadius: 5,
      backgroundColor: '#f0f0f0',
      borderWidth: 1,
      marginTop: 20,
      width: '60%',
      marginLeft: '20%'
   }
})