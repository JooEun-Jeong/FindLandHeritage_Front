import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyPageScreen = () => {
  return (
    <View>
      <Text>MyPageScreen</Text>
      <View style={styles.admob}>
        <Text style={{textAlign:'center'}}>advertisement</Text>
      </View>
    </View>
  )
}

export default MyPageScreen

const styles = StyleSheet.create({
  admob: {
    flex: 0.15,
    backgroundColor: 'gray',
    justifyContent: 'center',
  }
})