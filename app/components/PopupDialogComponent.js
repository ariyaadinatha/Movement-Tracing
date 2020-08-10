import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
} from "react-native";
import PopupDialog, {
  SlideAnimation,
  DialogTitle,
} from "react-native-popup-dialog";

import { insertNewTripList, updateTripList } from "../../databases/allShemas";

export default class PopupDialogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      isAddNew: true,
    };
  }

  showDialogComponentForAdd = () => {
    this.refs.popupDialog.show();
    this.setState({
      dialogTitle: "Add a new Trip",
      name: "",
      isAddNew: true,
    });
  };

  render() {
    const { dialogTitle } = this.state;
    return (
      <PopupDialog
        dialogTitle={<DialogTitle title={dialogTitle} />}
        width={0.7}
        height={180}
        ref={"popupDialog"}
      >
        <View style={styles.container}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Location Name"
            onChangeText={(text) => this.setState({ name: text })}
            value={this.state.name}
          />

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (this.state.name.trim() == "") {
                  alert("Please enter location name");
                  return;
                }
                this.refs.popupDialog.dismiss(() => {
                  if (this.state.isAddNew == true) {
                    const newTripList = {
                      id: Math.floor(Date.now() / 1000),
                      name: this.state.name,
                      creationDate: new Date(),
                    };
                    insertNewTripList(newTripList)
                      .then()
                      .catch((error) => {
                        alert("Insert new location error ${error}");
                      });
                  } else {
                  }
                });
              }}
            >
              <Text style={styles.textLabel}> Save </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.refs.popupDialog.dismiss(() => {
                  console.log("Cancel touched, dismiss popup");
                });
              }}
            >
              <Text style={styles.button}> Cancel </Text>
            </TouchableOpacity>
          </View>
        </View>
      </PopupDialog>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    height: 40,
    padding: 10,
    margin: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "dodgerblue",
    padding: 10,
    margin: 10,
  },
  textLabel: {
    color: "white",
    fontSize: 18,
  },
});
