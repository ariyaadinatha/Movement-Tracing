import React from "react";
import { View, Image, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <ListItem
        title="ini title"
        subTitle="ini subtitle"
        description="ini deskripsi"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});

export default ListingDetailsScreen;
