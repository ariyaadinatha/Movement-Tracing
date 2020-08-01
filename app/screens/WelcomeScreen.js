import React from "react";
import { Image, StyleSheet, Text, SafeAreaView } from "react-native";

function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image fadeDuration={1500} source={require("../assets/logo/icon.png")} />
      <Text> Movement Tracing App </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreen;
