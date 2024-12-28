import { TextInput, View } from "react-native-web";
import { StyleSheet } from "react-native";


function HomeScreen() {
  return(
    <View>
      <View>

      </View>
      <View>
        <Text>Search History Topics</Text>
      <TextInput placeholder="Search" style={styles.input} />
      </View>


    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});