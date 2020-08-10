import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
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
            style={styles.btn}
            onPress={() => this.props.onTripAdd()}
          >
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            placeholder={"Add Location"}
            placeholderTextColor={"rgba(255, 255, 255, .7)"}
            onChangeText={(val) => this.props.onChangeText(val)}
            value={this.props.inputValue}
          />
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
  btn: {
    top: -35,
    zIndex: 1,
    position: "absolute",
    right: 25,
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "dodgerblue",
  },
  btnText: {
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
