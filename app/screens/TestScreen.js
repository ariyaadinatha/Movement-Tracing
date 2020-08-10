import React from "react";

import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./WelcomeScreen";
import MainScreen from "./MainScreen";
import TripScreen from "./TripScreen";
import ListingDetailsScreen from "./ListingDetailsScreen";
import ProfileScreen from "./ProfileScreen";
import ReportScreen from "./ReportScreen";
import StatusScreen from "./StatusScreen";
import LocationScreen from "./LocationScreen";

// Percobaan buat navigation

const Tweets = () => (
  <Screen>
    <Text> Tweets </Text>
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text> Tweet Details </Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    <Stack.Screen name="Trip" component={LocationScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Report" component={ReportScreen} />
    <Stack.Screen name="Status" component={StatusScreen} />
    <Stack.Screen name="Location" component={LocationScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
