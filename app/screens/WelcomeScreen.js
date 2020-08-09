import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  navigation,
  navigate,
} from "react-native";

import AppButton from "../components/AppButton";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isError: false,
    };
  }

  /*     <TextInput
onChangeText={(text) => username(text)}
placeholder="Username"
style={styles.textInput}
/>
<TextInput
onChangeText={(text) => password(text)}
secureTextEntry
placeholder="Password"
style={styles.textInput}
/> */

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          fadeDuration={1500}
          source={require("../assets/logo/icon.png")}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate("Main")}
        >
          <AppButton title="Get Started" />
        </TouchableOpacity>
      </SafeAreaView>
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
