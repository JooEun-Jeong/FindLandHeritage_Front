import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputForm from '../components/InputForm'
import TableData from '../components/Table'
import { useSelector } from 'react-redux'

const SearchScreen = ({ navigation, route }) => {
  const jsonfile = useSelector((state) => state.landowner.data);
  const isFound = useSelector((state) => state.landowner.isFound);
  return (
    <SafeAreaView style={styles.container} behavior={Platform.OS === 'ios' ? 300 : 100}>
      <View style={styles.searchBar}>
        <InputForm val={route.params.keyword} isGoingSearchScreen={false} />
      </View>
      <View style={styles.table}>
        <TableData datalst={jsonfile} isFound={isFound}/>
      </View>
      {/* <InputForm val={route.params.keyword} isGoingSearchScreen={false} />
      <TableData datalst={jsonfile} isFound={isFound}/> */}
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: '#004AAD',
  },
  searchBar: {
    flex: 0.1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table:{
    flex: 0.9,
  }
})