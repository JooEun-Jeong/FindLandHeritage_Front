import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputForm from '../components/InputForm'
import { TableData, TableSelected } from '../components/Table'
import { useSelector } from 'react-redux'

const SearchScreen = ({ navigation, route }) => {
  const jsonfile = useSelector((state) => state.landowner.data);
  const isFound = useSelector((state) => state.landowner.isFound);
  const [userSelectedInfo, setUserSelectedInfo] = React.useState({
    "count": {
      "CNAME": 1,
      "JIBUN": 1,
      "AREA": 1,
      "BUYERADDR": 2
    }
  });
  
  return (
    <SafeAreaView style={styles.container} behavior={Platform.OS === 'ios' ? 300 : 100}>
      <View style={styles.searchBar}>
        <InputForm val={route.params.keyword} isGoingSearchScreen={false} />
        {/* <InputForm val={"정동철"} isGoingSearchScreen={false} /> */}
      </View>
      {/* <View style={styles.horizontalLine} /> */}
      <View style={styles.table}>
        <TableData datalst={jsonfile} isFound={isFound} />
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.resultTable}>
        <TableSelected entities={userSelectedInfo} />
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: '#004AAD',
    justifyContent: "center",
  },
  searchBar: {
    flex: 0.1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    flex: 1,
    paddingTop: 0,
  },
  resultTable: {
    justifyContent:'center', 
    backgroundColor:'darkblue',
  },
  horizontalLine: {
    width: "100%",
    textAlign: "center",
    flex: 0.001,
    backgroundColor: 'white',
    height: 1,
  }
})