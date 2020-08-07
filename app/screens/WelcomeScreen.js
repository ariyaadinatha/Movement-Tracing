import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  const [firstName, setFirstName] = useState("");
  const [pWord, setPWord] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Image fadeDuration={1500} source={require("../assets/logo/icon.png")} />
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        placeholder="Username"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(text) => setPWord(text)}
        secureTextEntry
        placeholder="Password"
        style={styles.textInput}
      />
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
    padding: 5,
    paddingTop: 20,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 5,
    paddingTop: 10,
    width: "90%",
    backgroundColor: "#f4f4f4",
    borderRadius: 15,
    margin: 5,
    alignItems: "center",
  },
});

export default WelcomeScreen;
