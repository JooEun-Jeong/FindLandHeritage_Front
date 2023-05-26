import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native'
import InputForm from '../components/InputForm';
import React from 'react'

const DescriptionScreen = ({navigation}) => {
  const description = [' 땅찾GO로 조상땅을 쉽게 찾아보세요.', '나도 몰랐던 숨은 땅을 찾아요!', '조상의 이름을 입력하세요', '레위기 20장 24절'];
  const [desIndex, setDesIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.order}>
        { description.map((content, i) => 
          <Pressable 
            key={i} 
            style={({pressed}) => 
              [styles.rect, {backgroundColor : pressed ? '#00BF63' : 'white'}]}
            onPressOut={() => setDesIndex(i)}
          />
        )}
      </View>
      <View style={styles.middle}>
        <Text style={styles.description}>{description[desIndex]}</Text>
        <Image source={require('../assets/imgs/cards.png')}/>
        {/* <Pressable style={styles.searchButton}>
          <Text style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold',}}>검색하기</Text>
        </Pressable> */}
        <InputForm next={navigation} />
      </View>
    </SafeAreaView>
  )
}

export default DescriptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20: 0,
    backgroundColor: '#004AAD',
  },
  order: {
    flex: 0.3,
    flexDirection: 'row',
    marginLeft: "8%",
  },
  rect: {
    width: "20%",
    marginLeft: "2%",
    marginTop: "20%",
    height: "4%",
    borderRadius: 10,
    backgroundColor: 'white',
  },
  description:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 25,
  },
  middle:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchButton: {
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 40,
    paddingLeft: 25,
    paddingRight: 25,
    width: "25%",
    borderRadius: 10,
    backgroundColor: 'white',
  },
})