import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import {
  Image,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  View,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";

function MainScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.topBar}>
          <View style={styles.topBarNotification}>
            <MaterialIcons name="notifications-none" size={24} color="black" />
          </View>
        </View>
        <Text>Selamat datang, </Text>
        <Text style={styles.title}>SPARTANS</Text>

        <React.Fragment>
          <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.topDropdown}>
              <View style={styles.topDropdownItem}>
                <EvilIcons name="location" size={24} color="black" />
                <Text style={styles.topDropdownText}> Medan </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <Modal visible={modalVisible} animationType="slide">
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </Modal>
        </React.Fragment>
      </View>
      <View style={styles.topStatusBar}>
        <View style={styles.topStatus}>
          <Text style={{ marginLeft: 23 }}> Sabtu, 18 Juli 2020 </Text>
          <View style={styles.statusRow}>
            <View>
              <Text style={styles.statusTitle}> Dikonfirmasi </Text>
              <Text style={styles.statusNumber}> 83.130 </Text>
            </View>
            <View>
              <Text style={styles.statusTitle}> Sembuh </Text>
              <Text style={styles.statusNumber}> 41.834 </Text>
            </View>
            <View>
              <Text style={styles.statusTitle}> Meninggal </Text>
              <Text style={styles.statusNumber}> 3.957 </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.topFeature}>
        <View style={styles.topFeatureItem}>
          <FontAwesome5 name="clock" size={40} color="dodgerblue" />
          <MaterialIcons
            name="chat-bubble-outline"
            size={40}
            color="dodgerblue"
          />
          <Feather name="heart" size={40} color="dodgerblue" />
        </View>
        <View style={styles.topFeatureItem}>
          <Text style={styles.topFeatureText}> Perjalanan </Text>
          <Text style={styles.topFeatureText}> Laporan </Text>
          <Text style={styles.topFeatureText}> Status </Text>
        </View>
      </View>

      <View style={styles.botNews}>
        <View style={styles.newsBody}>
          <Text style={styles.title}> Lorem Ipsum </Text>
          <Text
            style={styles.newsArticle}
            numberOfLines={5}
            ellipsizeMode="tail"
          >
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            fringilla facilisis finibus. Nam convallis velit sed massa ornare
            luctus. Donec accumsan mi non orci luctus accumsan. Sed aliquam
            fermentum erat sit amet tincidunt. Morbi et eros dictum,
            pellentesque magna sit amet, euismod justo. Sed pharetra quam a
            venenatis hendrerit. Sed vel eleifend augue, eget luctus arcu.{" "}
          </Text>
        </View>
      </View>

      <View style={styles.botNavigation}>
        <MaterialCommunityIcons name="home-outline" size={35} color="black" />
        <MaterialIcons name="add-circle-outline" size={35} color="black" />
        <Feather name="user" size={35} color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  botNews: {
    flex: 0.5,
    width: "100%",
  },
  botNavigation: {
    flex: 0.2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  newsBody: {
    backgroundColor: "dodgerblue",
    height: "100%",
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    paddingLeft: 5,
    paddingTop: 5,
  },
  newsArticle: {
    color: "white",
    textAlign: "justify",
    padding: 5,
  },
  topHeader: {
    backgroundColor: "dodgerblue",
    flex: 0.3,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 5,
    paddingLeft: 8,
  },
  headerLogo: {
    height: 30,
    width: 30,
    flexDirection: "row-reverse",
  },
  topBar: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  topBarNotification: {
    backgroundColor: "#8ac2ff",
    borderRadius: 15,
    padding: 2,
  },
  topDropdown: {
    backgroundColor: "#8ac2ff",
    marginTop: 10,
    padding: 3,
    borderRadius: 15,
  },
  topDropdownItem: {
    flexDirection: "row",
  },
  topDropdownText: {
    color: "white",
    fontWeight: "bold",
  },
  topStatus: {
    justifyContent: "space-evenly",
    padding: 5,
  },
  topStatusBar: {
    backgroundColor: "#fff",
    flex: 0.2,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  topFeature: {
    paddingTop: 10,
    backgroundColor: "#f5f5f5",
    flex: 0.2,
    width: "100%",
    alignContent: "center",
  },
  topFeatureText: {
    fontSize: 10,
    paddingRight: 8,
    color: "dodgerblue",
  },
  topFeatureItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 4,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statusNumber: {
    fontWeight: "bold",
  },
  statusTitle: {
    color: "dodgerblue",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    color: "white",
  },
  logo: {
    width: 35,
    height: 35,
  },
});

export default MainScreen;
