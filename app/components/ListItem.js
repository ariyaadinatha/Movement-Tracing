import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ListItem({ title, subTitle, description, timeIn, timeOut }) {
  return (
    <View>
      <Text style={styles.title}> {title} </Text>
      <View style={styles.container}>
        <View style={styles.time}>
          <Text> {timeIn} - </Text>
          <Text> {timeOut} </Text>
        </View>
        <View style={styles.time}>
          <Text> {subTitle} </Text>
          <Text> {description} </Text>
        </View>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
  },
  time: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
  },
});
