import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  View,
  Platform,
} from "react-native";

function MainScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <Image
          style={styles.headerLogo}
          source={require("../assets/logo/notification.png")}
        />
        <Text>Selamat datang, </Text>
        <Text style={styles.title}> SPARTANS</Text>
        <Text> Medan </Text>
      </View>
      <View style={styles.topStatus}>
        <Text> Sabtu, 18 Juli 2020 </Text>
        <View style={styles.statusRow}>
          <View>
            <Text> Dikonfirmasi </Text>
            <Text> 83.130 </Text>
          </View>
          <View>
            <Text> Sembuh </Text>
            <Text> 41.834 </Text>
          </View>
          <View>
            <Text> Meninggal </Text>
            <Text> 3.957 </Text>
          </View>
        </View>
      </View>
      <View style={styles.topFeature}>
        <View>
          <Image
            style={styles.logo}
            source={require("../assets/logo/time.png")}
          />
          <Text> Perjalanan </Text>
        </View>
        <View>
          <Image
            style={styles.logo}
            source={require("../assets/logo/chat.png")}
          />
          <Text> Laporan </Text>
        </View>
        <View>
          <Image
            style={styles.logo}
            source={require("../assets/logo/love.png")}
          />
          <Text> Status </Text>
        </View>
      </View>

      <View style={styles.botNews}>
        <Text> Berita </Text>
      </View>
      <View style={styles.botNavigation}>
        <Image
          style={styles.logo}
          source={require("../assets/logo/home.png")}
        />
        <Image style={styles.logo} source={require("../assets/logo/add.png")} />
        <Image
          style={styles.logo}
          source={require("../assets/logo/user.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bot: {
    backgroundColor: "#fff",
    flex: 1,
  },
  botNews: {
    backgroundColor: "dodgerblue",
    flex: 0.4,
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
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  top: {
    backgroundColor: "dodgerblue",
    flex: 1,
    width: "100%",
  },
  topHeader: {
    backgroundColor: "dodgerblue",
    flex: 0.4,
    width: "100%",
  },
  headerLogo: {
    height: 30,
    width: 30,
    flexDirection: "row-reverse",
  },
  topStatus: {
    backgroundColor: "#fff",
    flex: 0.2,
    width: "100%",
    justifyContent: "space-evenly",
  },
  topFeature: {
    backgroundColor: "#fff",
    flex: 0.3,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
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
