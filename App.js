import { StatusBar } from "expo-status-bar";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MainScreen from "./app/screens/MainScreen";
import TestScreen from "./app/screens/TestScreen";
import TripScreen from "./app/screens/TripScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import ReportScreen from "./app/screens/ReportScreen";
import StatusScreen from "./app/screens/StatusScreen";

export default function App() {
  //return <WelcomeScreen />;
  //return <MainScreen />;
  return <StatusScreen />;
  //return <TripScreen />;
  //return <ListingDetailsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
