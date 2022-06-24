import { View, Text, StyleSheet, StatusBar } from "react-native";
import InshortTabs from "./components/InshortTabs";

export default function App() {
  return (
    <View
      style={{...styles.container, backgroundColor: darkTheme ? "#282C35" : "white"}}
    >
      <InshortTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
