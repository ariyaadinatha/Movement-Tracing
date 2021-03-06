import { StatusBar } from "expo-status-bar";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  AppRegistry,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MainScreen from "./app/screens/MainScreen";
import TestScreen from "./app/screens/TestScreen";
import TripScreen from "./app/screens/TripScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import ReportScreen from "./app/screens/ReportScreen";
import StatusScreen from "./app/screens/StatusScreen";
import AddTrip from "./app/components/AddTrip";
import TripListComponent from "./app/components/TripListComponent";
import LocationScreen from "./app/screens/LocationScreen";
import AppLocation from "./app/components/AppLocation";
import LocationApp from "./app/screens/LocationApp";

export default function App() {
  //return <MainTabScreen/>
  return <TestScreen />;
  //return <MainScreen />;
  //return <ProfileScreen />;
  //return <TripScreen />;
  //return <ListingDetailsScreen />;
  //return <LocationScreen />;
  //return <AppLocation />;
  //return <LocationApp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
