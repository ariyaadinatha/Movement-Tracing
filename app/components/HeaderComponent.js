import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  Alert,
} from "react-native";

const HeaderComponent = (props) => {
  const {
    title,
    showAddTripList,
    hasAddButton,
    hasSortButton,
    sort,
    sortState,
    hasDeleteAllButton,
  } = props;
  return (
    <View style={StyleSheet.container}>
      {hasAddButton && (
        <TouchableOpacity style={styles.addButton} onPress={showAddTripList}>
          <Image
            style={styles.addButtonImage}
            source={require("../assets/logo/add.png")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
  addButton: {
    zIndex: 2,
    marginRight: 10,
    marginTop: 30,
  },
  addButtonImage: {
    width: 42,
    height: 42,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    padding: 50,
  },
});

export default HeaderComponent;
