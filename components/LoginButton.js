import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginButton = (props) => { 
  // console.log(props.next)
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
        <Pressable style={[styles.loginbutton, {backgroundColor: 'white',}]}>
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
    width: "45%",
    borderRadius: 10,
  },
  loginText:{
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})