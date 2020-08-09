import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";

export default class Footer extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.footer}
        behavior="position"
        enabled={true}
      >
        <View style={styles.footerInner}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.onNoteAdd()}
          >
            <Text style={styles.buttonText}> + </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    width: "100%",
    height: 100,
    bottom: 0,
  },
  footerInner: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  button: {
    zIndex: 1,
    position: "absolute",
    right: 25,
    top: -30,
    width: 75,
    height: 75,
    borderRadius: 55,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "dodgerblue",
  },
  buttonText: {
    color: "#fff",
    fontSize: 40,
  },
  textInput: {
    zIndex: 0,
    flex: 1,
    padding: 20,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#262526",
  },
});
