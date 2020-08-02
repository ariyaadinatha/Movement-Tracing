import React from "react";
import { Image, StyleSheet, Text, SafeAreaView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <DropDownPicker
        items={[
          {
            label: "UK",
            value: "uk",
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: "France",
            value: "france",
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
        ]}
        defaultValue={this.state.country}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) =>
          this.setState({
            country: item.value,
          })
        }
      />
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
