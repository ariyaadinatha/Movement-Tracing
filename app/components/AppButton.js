import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log("Tapped")}
    >
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fc5c65",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
