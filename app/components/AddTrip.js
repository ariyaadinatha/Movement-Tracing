import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import Screen from "./Screen";
import AppLocation from "./AppLocation";

export default function AddTrip() {
  const [trip, setTrip] = useState("");
  const [date, setDate] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [contact, setContact] = useState("");

  const changeTrip = (val) => {
    setTrip(val);
  };
  const changeDate = (val) => {
    setDate(val);
  };
  const changeTimeIn = (val) => {
    setTimeIn(val);
  };
  const changeTimeOut = (val) => {
    setTimeOut(val);
  };
  const changeContact = (val) => {
    setContact(val);
  };

  return (
    <View style={styles.memek}>
      <TextInput
        style={styles.add}
        placeholder="Tanggal"
        onChangeText={changeDate}
      />
      <TextInput
        style={styles.add}
        placeholder="Nama tempat"
        onChangeText={changeTrip}
      />
      <TextInput
        style={styles.add}
        placeholder="Jam masuk"
        onChangeText={changeTimeIn}
      />
      <TextInput
        style={styles.add}
        placeholder="Jam keluar"
        onChangeText={changeTimeOut}
      />
      <TextInput
        style={styles.add}
        placeholder="Kontak"
        onChangeText={changeContact}
      />
      <Button onPress={() => console.log(trip)} title="add" />
      <AppLocation />
    </View>
  );
}

const styles = StyleSheet.create({
  memek: {
    top: 10,
  },
  add: {},
});
