import { StyleSheet, Text, View, Platform, Modal, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputForm from '../components/InputForm'
import { TableData, TableSelected } from '../components/Table'
import ComputeChecks from '../components/ComputeChecks'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const SearchScreen = ({ navigation, route }) => {
  const jsonfiles = useSelector((state) => state.landowner.data);
  // const isFound = useSelector((state) => state.landowner.isFound);
  const userSelectedInfo = useSelector((state) => state.userInfo.user);
  // 추후 결제 과정을 구현할 때, selectedProduct[i] or paidProduct[i] 로 조건을 따질 수 있겠다.

  // 모달과 함께 조합하여 로딩 이미지를 보여주도록 함
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 20 : 0,
      backgroundColor: '#ffffff'
    }} behavior={Platform.OS === 'ios' ? 300 : 100}>
      
      <Modal
        animationType="fade"
        transparent={true}
        visible={isLoading}
      >
        <View style={styles.loadingim}>
          <Image source={require('../assets/imgs/loading.gif')} />
        </View>
      </Modal>

      <View style={[styles.container,
      ]}>
        <View style={styles.searchBar}>
          <InputForm next={navigation} val={route.params.keyword} setLoading={setIsLoading} isGoingSearchScreen={false} />
        </View>
        <View style={styles.table}>
          <TableData datas={jsonfiles} />
        </View>
        <View style={styles.resultTable}>
          <TableSelected entities={userSelectedInfo} />
          <ComputeChecks entities={userSelectedInfo} />
        </View>
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
  loadingim: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    flex: 0.9,
    paddingTop: 0,
    backgroundColor: '#E7E8EF',
  },
  resultTable: {
    // flex:0.1,
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