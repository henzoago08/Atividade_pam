import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Pet Adopt 🐾</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#22c55e",
    alignItems: "center",

    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

    elevation: 6,
  },

  text: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
});