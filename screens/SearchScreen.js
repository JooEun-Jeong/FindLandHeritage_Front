import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputForm from '../components/InputForm'
import { TableData, TableSelected } from '../components/Table'
import { useSelector } from 'react-redux'

const SearchScreen = ({ navigation, route }) => {
  const jsonfile = useSelector((state) => state.landowner.data);
  const isFound = useSelector((state) => state.landowner.isFound);
  const [userSelectedInfo, setUserSelectedInfo] = useState({
    "userId": {
      "selectIDs": [],
      "count": {
        "cname": 0,
        "buyerAddr": 0,
        "jibun": 0,
        "area": 0
      },
      "selectedProduct": {
        "254": [
          true,
          false,
          false,
          false
        ]
      },
      "paidProduct": {
        "254": [
          false,
          true,
          false,
          false
        ]
      }
    }
  });
  // 추후 결제 과정을 구현할 때, selectedProduct[i] or paidProduct[i] 로 조건을 따질 수 있겠다.


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
      <View style={styles.admob}>
        <Text style={{ textAlign: 'center' }}>advertisement</Text>
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: '#FFFFFF',
    justifyContent: "center",
  },
  searchBar: {
    flex: 0.1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  table: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#E7E8EF',
  },
  resultTable: {
    justifyContent: 'center',
  },
  horizontalLine: {
    width: "100%",
    textAlign: "center",
    flex: 0.001,
    backgroundColor: 'white',
    height: 1,
  },
  admob: {
    height: 46,
    backgroundColor: 'gray',
    justifyContent: 'center',
  }
})