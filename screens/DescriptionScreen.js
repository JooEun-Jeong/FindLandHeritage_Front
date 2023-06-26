import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Modal } from 'react-native'
import InputForm from '../components/InputForm';
import Swiper from 'react-native-web-swiper'; // https://github.com/reactrondev/react-native-web-swiper
import React from 'react'

const DescriptionScreen = ({ navigation }) => {
  const heads = [' 할아버지 이름을 입력하세요!', '집 근처 동사무소에서 제적등본을 떼세요!', '지도로 현재 예상지역을 확인하세요!', '전문가에게 맡겨보세요!'];
  const descriptions = ['1910년대 토지소유주를 확인할 수 있습니다\n토지조사부 기반으로 확인된 자료입니다\n\n',
    '할아버지 이름은 제적등본에 있습니다\n제적등본상 한자와 주소가\n토지조사부상 한자와 주소와 같다면\n당시 할아버지 땅이었을 확률이 매우 높습니다\n',
    '토지조사부상 주소는 100년간 많은 변화가 있었습니다\n과거 할아버지께서 소유하셨던 땅의 예상 필지를\n현재 지도를 통해 확인해드립니다\n지도를 통해 100년전 할아버지의 삶의 터전을 만나보세요',
    '땅찾기 전문 행정사, 공인중개사와\n토지 소송 전문 변호사를 소개해드립니다\n전문가들이 현재 지번을 확인해드리고,\n상속관계를 파악해 당신의 땅을 돌려드립니다'
  ]
  // 모달과 함께 조합하여 로딩 이미지를 보여주도록 함
  const [isLoading, setIsLoading] = React.useState(false);
  
  return (
    <SafeAreaView style={{ flex: 1, }}>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isLoading}
      >
        <View style={styles.loadingim}>
          <Image source={require('../assets/imgs/loading.gif')} />
        </View>
      </Modal>

      <View style={[styles.container, {backgroundColor: !isLoading ? '#ffffff' : 'rgba(0, 0, 0, 0.2)',}]}>
        <View style={styles.headlineArea}>
          <Text style={styles.headline}>조상의 이름을 검색하여{'\n'}땅을 찾아보세요.</Text>
        </View>
        <View style={{ flex: 0.15 }}>
          <InputForm next={navigation} setLoading={setIsLoading} isGoingSearchScreen={true} />
        </View>
        <View style={styles.middle}>
          <View style={{ flex: 1, alignContent: 'flex-start', padding: 16 }}>
            <Swiper
              loop={true}
              timeout={4}
              controlsProps={{
                dotsTouchable: true,
                dotsPos: 'bottom',
                prevPos: false,
                nextPos: false,
                dotActiveStyle: { backgroundColor: "#00BF63", width: 42, },
              }}
              containerStyle={{
                height: 195,
                justifyContent: 'center',
                backgroundColor: '#E7E8EF',
                backgroundColor: !isLoading ? '#E7E8EF' : "rgba(0, 0, 0, 0.1)",
                borderRadius: 20,
              }}
            >
              {heads.map((content, i) => (
                <View key={i} style={styles.slide}>
                  <Text style={styles.head}>{content}</Text>
                  <Text style={styles.description}>{descriptions[i]}</Text>
                  <Image source={require('../assets/imgs/cards.png')} style={styles.image} />
                </View>
              ))}
            </Swiper>
          </View>
        </View>
        <View style={{ flex: 0.2 }}></View>
      </View>

      <View style={styles.admob}>
        <Text style={{ textAlign: 'center' }}>advertisement</Text>
      </View>
    </SafeAreaView>
  )
}

export default DescriptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: '#ffffff',
  },
  loadingim: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headlineArea: {
    flex: 0.2,
    padding: 16,
    justifyContent: 'flex-end',
  },
  headline: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
  },
  slide: {
    alignItems: 'center',
  },
  middle: {
    flex: 0.7,
    justifyContent: 'center',
  },
  head: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  description: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25,
  },
  admob: {
    height: 46,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  // order: {
  //   flex: 0.2,
  //   flexDirection: 'row',
  //   marginLeft: "8%",
  // },
  // rect: {
  //   width: "20%",
  //   marginLeft: "2%",
  //   marginTop: "20%",
  //   height: "4%",
  //   borderRadius: 10,
  //   backgroundColor: 'white',
  // },
})