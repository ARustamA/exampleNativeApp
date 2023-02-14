import { StyleSheet, Text, View } from "react-native";
import { styles } from "../styles/style";


export default function Contact({ navigation: { goBack } }) {
   // const loadScene = () => {
   //    goBack();
   // }
   return (
      <View
         style={styles.main}>
         <Text style={styles.text}>Main page</Text>
         {/* <Button title="open page" onPress={loadScene} /> */}

      </View>
   );
}
const style = StyleSheet.create({

})