import React, { Component } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import {
  updateTripList,
  deleteTripList,
  queryAllTripLists,
} from "../../databases/allShemas";

import realm from "../../databases/allShemas";
import Swipeout from "react-native-swipeout";

import HeaderComponent from "./HeaderComponent";
import PopupDialogComponent from "./PopupDialogComponent";

let FlatListItem = (props) => {
  const {
    itemIndex,
    id,
    name,
    creationDate,
    popupDialogComponent,
    onPressItem,
  } = props;
  showEditModal = () => {};

  showDeleteConfirmation = () => {
    Alert.alert("Delete", "Delete a tripList", [
      {
        text: "No",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {},
      },
    ]);
  };

  return (
    <Swipeout
      right={[
        {
          text: "Edit",
          backgroundColor: "yellow",
          onPress: showEditModal,
        },
        {
          text: "Delete",
          backgroundColor: "red",
          onPress: showDeleteConfirmation,
        },
      ]}
      autoClose={true}
    >
      <TouchableOpacity onPress={onPressItem}>
        <View
          style={{ backgroundColor: itemIndex % 2 == 0 ? "grey" : "white" }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, margin: 10 }}>
            {" "}
            {name}{" "}
          </Text>
          <Text styles={{ fontSize: 18, margin: 10 }} numberOfLines={2}>
            {" "}
            {creationDate.toLocaleString()}{" "}
          </Text>
        </View>
      </TouchableOpacity>
    </Swipeout>
  );
};

export default class TripListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripLists: [],
    };
    this.reloadData();
    realm.addListener("change", () => {
      this.reloadData();
    });
  }

  reloadData = () => {
    queryAllTripLists()
      .then((tripLists) => {
        this.setState({ tripLists });
      })
      .catch((error) => {
        this.setState({ tripLists: [] });
      });
    console.log("reloadData");
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent
          title={"Trip List"}
          hasAddButton={true}
          showAddTripList={() => {
            this.refs.popupDialogComponent.showDialogComponentForAdd();
          }}
        />
        <FlatList
          style={styles.flatList}
          data={this.state.tripLists}
          renderItem={({ item, index }) => (
            <FlatList
              {...item}
              itemIndex={index}
              popupDialogComponent={this.refs.popupDialogComponent}
              onPressItem={() => {
                alert("You pressed item");
              }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <PopupDialogComponent ref={"popupDialogComponent"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
});
