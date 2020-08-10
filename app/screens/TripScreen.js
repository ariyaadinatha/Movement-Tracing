import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
} from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import AddTrip from "../components/AddTrip";

const trip = [
  {
    id: 1,
    timeIn: "13.00",
    timeOut: "13.45",
    location: "Dubai",
    description: "kontak dengan mba indomar",
    date: "Sabtu, 18 Januari 2020",
  },
  {
    id: 2,
    timeIn: "14.00",
    timeOut: "15.25",
    location: "Dumay",
    description: "kontak dengan mba alfamar",
    date: "Sabtu, 18 Januari 2020",
  },
];

function TripScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.title}> PERJALANAN </Text>
      </View>

      <View style={styles.flatList}>
        <FlatList
          data={trip}
          keyExtractor={(trip) => trip.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.date}
              subTitle={item.location}
              description={item.description}
              timeIn={item.timeIn}
              timeOut={item.timeOut}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeader: {
    backgroundColor: "dodgerblue",
    flex: 0.1,
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 5,
    paddingLeft: 8,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    color: "white",
  },
  flatList: {
    padding: 5,
  },
});

export default TripScreen;
