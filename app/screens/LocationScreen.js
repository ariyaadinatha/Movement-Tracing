import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

import Header from "../components/LocationHeader";
import Footer from "../components/LocationFooter";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      trip: "",
    };
  }

  async componentDidMount() {
    const location = await AsyncStorage.getItem("location");
    if (location && location.length > 0) {
      this.setState({
        location: JSON.parse(location),
      });
    }
  }

  updateAsyncStorage(location) {
    return new Promise(async (resolve, reject) => {
      try {
        await AsyncStorage.removeItem("location");
        await AsyncStorage.setItem("location", JSON.stringify(location));
        return resolve(true);
      } catch (e) {
        return reject(e);
      }
    });
  }

  clonelocation() {
    return [...this.state.location];
  }

  async addTrip() {
    if (this.state.trip.length <= 0) return;

    try {
      const location = this.clonelocation();
      location.push(this.state.trip);

      await this.updateAsyncStorage(location);

      this.setState({
        location: location,
        trip: "",
      });
    } catch (e) {
      // location could not be updated
      alert(e);
    }
  }

  async removeTrip(i) {
    try {
      const location = this.clonelocation();
      location.splice(i, 1);

      await this.updateAsyncStorage(location);
      this.setState({ location: location });
    } catch (e) {
      // Trip could not be deleted
      alert(e);
    }
  }

  renderlocation() {
    return this.state.location.map((trip, i) => {
      return (
        <TouchableOpacity
          key={i}
          style={styles.trip}
          onPress={() => this.removeTrip(i)}
        >
          <Text style={styles.tripText}>{trip}</Text>
          <Text style={styles.tripText}> skas </Text>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="PERJALANAN" />

        <ScrollView style={styles.scrollView}>
          {this.renderlocation()}
        </ScrollView>

        <Footer
          onChangeText={(trip) => this.setState({ trip })}
          inputValue={this.state.trip}
          onTripAdd={() => this.addTrip()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scrollView: {
    maxHeight: "82%",
    marginBottom: 100,
    backgroundColor: "#fff",
  },
  trip: {
    margin: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    backgroundColor: "#f9f9f9",
    borderColor: "#ddd",
    borderRadius: 10,
  },
  tripText: {
    fontSize: 14,
    padding: 20,
  },
});
