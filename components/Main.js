
import { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles/style";


export default function Main({ navigation: { navigate } }) {
   // const loadScene = () => {
   //    navigate('Contact')
   // } 
   const onPressNews = (item) => {
      navigate('FullNews', item)
   }
   const [news, setNews] = useState([
      { name: 'google', anons: 'google vwwqd', full: 'google is cool' },
      { name: 'apple', anons: 'apple vwwqd', full: 'apple is cool' },
      { name: 'facebook', anons: 'facebook vwwqd', full: 'facebook is cool' },

   ])
   return (
      <View
         style={styles.main}>
         <Text style={styles.text}>Main page</Text>
         <FlatList data={news} renderItem={
            ({ item }) => (
               <TouchableOpacity onPress={()=>onPressNews(item)}>
                  <Text>{item.name}</Text>
                  <Text>{item.anons}</Text>

               </TouchableOpacity>
            )
         } />
      </View>
   );
}
// const style = StyleSheet.create({

// })