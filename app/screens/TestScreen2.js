import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

export default function List() {
  const [list, setList] = useState([
    {
      id: 1,
      tanggal: "18 Maret 2020",
      tempat: "Ancol",
      jamMasuk: "13.00",
      jamKeluar: "14.00",
      deskripsi: "Kontak sama Budi",
    },
    {
      id: 2,
      tanggal: "20 Maret 2020",
      tempat: "Dufan",
      jamMasuk: "12.00",
      jamKeluar: "15.00",
      deskripsi: "Kontak sama Sari",
    },
  ]);

  return (
    <Screen style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.title}> PERJALANAN </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <ListItem
                title={item.tanggal}
                timeIn={item.jamMasuk}
                timeOut={item.jamKeluar}
                subTitle={item.tempat}
                description={item.deskripsi}
              />
            )}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginRight: 15,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 55,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 30,
    color: "grey",
  },
  content: {
    padding: 5,
  },
  topHeader: {
    backgroundColor: "dodgerblue",
    flex: 0.1,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 5,
    paddingLeft: 8,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    paddingLeft: 10,
    fontSize: 20,
  },
});
