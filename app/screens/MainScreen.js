import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import LocationApp from "./LocationApp";
import GetLocation from "react-native-get-location";
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
  TouchableOpacity,
} from "react-native";

function MainScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);

  var today = new Date();
  var weekday = new Array(7);
  weekday[0] = "Minggu";
  weekday[1] = "Senin";
  weekday[2] = "Selasa";
  weekday[3] = "Rabu";
  weekday[4] = "Kamis";
  weekday[5] = "Jumat";
  weekday[6] = "Sabtu";
  var n = weekday[today.getDay()];
  var date =
    n +
    ", " +
    today.getDate() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getFullYear();

  //beres

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.topBar}>
          <React.Fragment>
            <View style={styles.topBarNotification}>
              <MaterialIcons
                name="notifications-none"
                size={24}
                color="black"
                onPress={() => setModalVisible(true)}
              />
            </View>
            <Modal visible={modalVisible} animationType="slide">
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </Modal>
          </React.Fragment>
        </View>
        <Text>Selamat datang, </Text>
        <Text style={styles.title}>SPARTANS</Text>

        <TouchableWithoutFeedback>
          <View style={styles.topDropdown}>
            <View style={styles.topDropdownItem}>
              <EvilIcons name="location" size={24} color="black" />
              <Text style={styles.topDropdownText}></Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.topStatusBar}>
        <View style={styles.topStatus}>
          <Text style={{ marginLeft: 5, fontWeight: "bold" }}> {date} </Text>
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

      <View style={styles.topFeature1}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Trip")}>
          <Feather name="heart" size={40} color="dodgerblue" />
          <Text style={styles.topFeatureText}> Perjalanan </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Report")}>
          <MaterialIcons
            name="chat-bubble-outline"
            size={40}
            color="dodgerblue"
          />

          <Text style={styles.topFeatureText}> Laporan </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Status")}>
          <Feather name="heart" size={40} color="dodgerblue" />
          <Text style={styles.topFeatureText}> Status </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botNews}>
        <View style={styles.newsBody}>
          <Text style={styles.title}> Berita </Text>
          <Text
            style={styles.newsArticle}
            numberOfLines={11}
            ellipsizeMode="tail"
          >
            {" "}
            Gugus Tugas Percepatan Penanganan Covid-19 Kabupaten Bandung kembali
            melaporkan update penanganan kasus virus corona (Covid-19). Hingga
            Minggu 9 Agustus 2020 pukul 12.00 WIB, total kasus konfirmasi atau
            positif Covid-19 di Kabupaten Bandung mencapai 250 kasus. Artinya
            terdapat penambahan sebanyak 15 kasus dari kemarin yang berjumlah
            235 kasus. Dari 250 konfirmasi Covid-19, 85 diantaranya berstatus
            dalam proses perawatan, 158 pasien dinyatakan sembuh, sedangkan 7
            lainnya dinyatakan meninggal dunia. Sementara itu kasus suspek
            proses berjumlah 28, discarded mencapai 2.200, probable 26, dan
            kontak erat proses berjumlah 125. Dalam rilis yang diterima,
            proporsi kasus konfirmasi positif Covid-19 di Kabupaten Bandung
            menurut jenis kelamin didominasi oleh laki-laki sebesar 53%{" "}
          </Text>
        </View>
      </View>

      <View style={styles.botNavigation}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Main")}>
          <MaterialCommunityIcons name="home-outline" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Location")}>
          <MaterialIcons name="add-circle-outline" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <Feather name="user" size={35} color="black" />
        </TouchableOpacity>
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
  botNavigation1: {
    flex: 0.2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    flex: 1,
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

  topFeature1: {
    flex: 0.2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  topFeatureText: {
    fontSize: 10,
    paddingRight: 8,
    color: "dodgerblue",
  },

  topFeatureItem1: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 4,
    flexDirection: "row",
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
