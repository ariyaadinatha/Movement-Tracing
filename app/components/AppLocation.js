import React from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class App extends React.Component {
  place = {
    location: null,
    geocode: null,
    errorMessage: "",
  };

  componentDidMount() {
    this.getLocationAsync();
  }

  // comot dari dokumentasi
  // https://docs.expo.io/versions/latest/sdk/location/

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setPlace({
        errorMessage: "Permission to access location was denied",
      });
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    this.setPlace({ location: { latitude, longitude } });
  };
  getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setPlace({ geocode });
  };
  render() {
    const { location, geocode, errorMessage } = this.place;
    return (
      <View>
        <Text>
          {geocode ? `${geocode[0].city}, ${geocode[0].isoCountryCode}` : ""}
        </Text>
        <Text>{geocode ? geocode[0].street : ""}</Text>
        <Text>
          {location ? `${location.latitude}, ${location.longitude}` : ""}
        </Text>
      </View>
    );
  }
}
