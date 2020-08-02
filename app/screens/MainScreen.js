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
        <View style={styles.topBar}>
          <Image
            style={styles.headerLogo}
            source={require("../assets/logo/notification.png")}
          />
        </View>
        <Text>Selamat datang, </Text>
        <Text style={styles.title}> SPARTANS</Text>
        <Text> Medan </Text>
      </View>
      <View style={styles.topStatus}>
        <Text> Sabtu, 18 Juli 2020 </Text>
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
  top: {
    backgroundColor: "dodgerblue",
    flex: 1,
    width: "100%",
  },
  topHeader: {
    backgroundColor: "dodgerblue",
    flex: 0.4,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 5,
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
  topStatus: {
    backgroundColor: "#fff",
    flex: 0.2,
    width: "100%",
    justifyContent: "space-evenly",
    padding: 5,
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
  statusNumber: {
    fontWeight: "bold",
  },
  statusTitle: {
    color: "dodgerblue",
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
