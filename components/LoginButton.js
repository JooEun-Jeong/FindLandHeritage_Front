import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { googleLogin } from '../functions/logins'
import { dev } from '../config/secrets.json'
const secrets = dev;

const LoginButton = (props) => {
  // console.log(props.next)

  // 개발 url depending on platform
  const iosUrl = secrets.iosUrl;
  const androidUrl = secrets.androidUrl;
  const url = Platform.OS === 'ios' ? iosUrl : androidUrl;

  return (
    <View style={styles.loginArea}>
      {/* 카카오 계정 */}
      <Pressable
        style={[styles.loginbutton, { backgroundColor: '#F7E600', }]}
        onPress={() => props.next.navigate('tabNavi', {screen: 'searchStackNavi', params: {screen: 'description'}})}
      > 
        <Image source={require('../assets/imgs/login/kakao.png')}
          style={{ width: 18, height: 18, marginRight: 8, }} />
        <Text style={styles.loginText}>계정으로 로그인</Text>
      </Pressable>

      {/* 네이버 계정 */}
      <Pressable style={[styles.loginbutton, { backgroundColor: '#F4F4F6', }]}>
        <Image source={require('../assets/imgs/login/naver.png')}
          style={{ width: 18, height: 18, marginRight: 8, }} />
        <Text style={styles.loginText}>계정으로 로그인</Text>
      </Pressable>

      {/* 구글 계정 */}
      <Pressable
        style={[styles.loginbutton, { backgroundColor: '#F4F4F6', }]}
        onPress={(e) => {
          googleLogin(url);
        }}>
        <Image source={require('../assets/imgs/login/google.png')}
          style={{ width: 18, height: 18, marginRight: 8, }} />
        <Text style={styles.loginText}>계정으로 로그인</Text>
      </Pressable>
    </View>
  );
}

export default LoginButton

const styles = StyleSheet.create({
  layout: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  loginArea: {
    flex: 2,
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // width: '60%'
  },
  loginbutton: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    width: "80%",
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})