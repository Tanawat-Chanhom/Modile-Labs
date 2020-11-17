import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import TextComponent from "./app/screens/TextComponent"
import TextComponent2 from "./app/screens/TextComponent2"
import TextInput1 from "./app/screens/TextInput1"
import ScrollView1 from "./app/screens/ScrollView1"
import StyleSheet1 from "./app/screens/StyleSheet1"
import StyleSheet2 from "./app/screens/StyleSheet2"
import StyleSheet3 from "./app/screens/StyleSheet3"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TextComponent/> */}
      {/* <TextComponent2/> */}
      {/* <TextInput1/> */}
      {/* <ScrollView1/> */}
      {/* <StyleSheet1/> */}
      {/* <StyleSheet2/> */}
      <StyleSheet3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    width: "100%",
    height: "100%"
  },
});
