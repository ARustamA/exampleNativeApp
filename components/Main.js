
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
      { name: 'google', anons: 'google vwwqd', full: 'google is cool', key:1 },
      { name: 'apple', anons: 'apple vwwqd', full: 'apple is cool',key:2 },
      { name: 'facebook', anons: 'facebook vwwqd', full: 'facebook is cool',key:3 },

   ])
   return (
      <View
         style={styles.main}>
         {/* <Text style={styles.text}>Main page</Text> */}
         <FlatList data={news} renderItem={
            ({ item }) => (
               <TouchableOpacity onPress={()=>onPressNews(item)} key={item.key}>
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