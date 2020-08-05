import React from "react";
import { Image, StyleSheet, View, SafeAreaView } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image fadeDuration={1500} source={require("../assets/logo/icon.png")} />
      <View style={styles.loginButton}>
        <AppButton title="login" />
      </View>
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
  loginButton: {
    width: "100%",
    padding: 10,
    paddingTop: 20,
  },
});

export default WelcomeScreen;
