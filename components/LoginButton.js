import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {googleLogin} from '../functions/logins'
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
        <Pressable 
          style={[styles.loginbutton, {backgroundColor: 'yellow',}]}
          onPress={() => props.next.navigate('description')}
        >
          <Text style={styles.loginText}>카카오 계정으로 로그인</Text>
        </Pressable>
        <Pressable style={[styles.loginbutton, {backgroundColor: 'lightgray',}]}>
          <Text style={styles.loginText}>Apple 계정으로 로그인</Text>
        </Pressable>
        <Pressable 
          style={[styles.loginbutton, {backgroundColor: 'white',}]}
          onPress={(e)=> {
            googleLogin(url);
          }}>
          <Text style={styles.loginText}>Google 계정으로 로그인</Text>
        </Pressable>
      </View>
  );
}

export default LoginButton

const styles = StyleSheet.create({
  layout:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  loginArea:{
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
  },
  loginText:{
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})