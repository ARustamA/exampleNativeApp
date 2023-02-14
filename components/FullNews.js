import { StyleSheet, Text, View } from "react-native";
import { styles } from "../styles/style";


export default function FullNews({ route }) {
   // const loadScene = () => {
   //    goBack();
   // }
   return (
      <View
         style={styles.main}>
         <Text style={styles.text}>{route.params.name}</Text>
         <Text >{route.params.anons}</Text>
         <Text>{route.params.full}</Text>
         

      </View>
   );
}
const style = StyleSheet.create({

})