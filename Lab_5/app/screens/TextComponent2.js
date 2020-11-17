import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default function TextComponent2() {
    return (
        <Text style={styles.baseText}>
          I am bold
          <Text style={styles.innerText}> and red</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold'
    },
    innerText: {
      color: 'red'
    }
  });
  
