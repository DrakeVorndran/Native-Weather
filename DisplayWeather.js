import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const DisplayWeather = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>75˚</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold'
  }
})

export default DisplayWeather