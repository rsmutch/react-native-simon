import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Shapes from "./Components/Shapes";

export default function App() {
  return (
    <View style={styles.container}>
      <Shapes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
