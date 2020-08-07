import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
  },
});
