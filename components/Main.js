
import { Text, View } from "react-native";
import { styles } from "../styles/style";


export default function Main({ navigation: { navigate } }) {
   // const loadScene = () => {
   //    navigate('Contact')
   // }
   return (
      <View
         style={styles.main}>

         <Text style={styles.text}>Main page</Text>
      </View>
   );
}
// const style = StyleSheet.create({

// })