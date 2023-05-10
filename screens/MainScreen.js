import { SafeAreaView, StyleSheet, View, StatusBar, Image } from "react-native";
import React from "react";
import InputForm from "../components/InputForm";
import LoginButton from "../components/LoginButton";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20: 0,
    backgroundColor: '#004AAD',
  },
  mainlogoArea:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ims:{
    width: 300,
    height: 300,
  },
  login:{
    flex: 1,
    justifyContent: 'center',
    // marginTop: 200,
  }
})

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'}></StatusBar>
        <View style={styles.mainlogoArea}>
          <Image style={styles.ims} source={require('../assets/imgs/logo.png')}/>
        </View>
        {/* <InputForm style={styles.input} /> */}
        <View style={styles.login}>
          <LoginButton next={navigation}/>
        </View>
    </SafeAreaView>
  );

}

export default MainScreen;