import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

export default function StyleSheet3() {
    return (
      <View style={styles.container}>
        <Text style={styles.row}>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text style={styles.row}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  row: {
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
