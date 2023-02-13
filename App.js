
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback, Platform, FlatList } from 'react-native';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { ListItem } from './components/ListItem';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: 'Rewefw', key: '1' },
    { text: 'FWEWF', key: '2' },
    { text: 'ergeerf', key: '3' },
    { text: 'thjry', key: '4' },

  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter( listOfItems => listOfItems.key !== key) 
    })
  }
  return (
    <View style={styles.main}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} deleteHandler={deleteHandler} />
        )} />


      </View>
    </View>
  );
}

const styles = StyleSheet.create({

})

