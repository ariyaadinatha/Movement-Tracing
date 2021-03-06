import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "18%",
    padding: 5,
    paddingLeft: 15,
    borderBottomWidth: 8,
    borderBottomColor: "#ddd",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  text: {
    fontSize: 18,
    letterSpacing: 1.1,
    fontWeight: "bold",
    color: "#fff",
  },
});
