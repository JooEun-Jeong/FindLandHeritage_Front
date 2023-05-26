import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputForm from '../components/InputForm'

const SearchScreen = ({navigation, route}) => {
  return (
    <ScrollView style={styles.container}>
      <InputForm val={route.params.keyword} isSearchScreen={true}/>

    </ScrollView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20: 0,
    backgroundColor: '#004AAD',
  },
})