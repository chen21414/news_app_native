import { View, Text, StyleSheet } from "react-native";
import React from "react";

const DiscoverScreen = () => {
  return (
    <View style={styles.discover}>
      {/* search */}

      {/* categories */}
      <Text style={{ ...styles.subtitle, color: "white" }}>Categories</Text>
      {/* sources */}
    </View>
  );
};

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
});

export default DiscoverScreen;
