import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  View,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  TouchableOpacity,
} from "react-native";

export default class App extends React.Component {
  state = {
    location: null,
    geocode: null,
    errorMessage: "",
  };
  componentDidMount() {
    this.getLocationAsync();
  }
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied",
      });
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    this.setState({ location: { latitude, longitude } });
  };
  getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setState({ geocode });
  };

  render() {
    const { location, geocode, errorMessage } = this.state;

    return (
      <View>
        <Text>
          {geocode ? `${geocode[0].city}, ${geocode[0].isoCountryCode}` : ""}
        </Text>
        <Text>{geocode ? geocode[0].street : ""}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "#00000070",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heading1: {
    fontWeight: "bold",
    fontSize: 30,
    margin: 20,
  },
  heading2: {
    color: "#fff",
    margin: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  heading3: {
    color: "#fff",
    margin: 5,
  },
});
