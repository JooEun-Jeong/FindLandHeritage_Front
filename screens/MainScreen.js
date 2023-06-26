import { SafeAreaView, StyleSheet, View, StatusBar, Image } from "react-native";
import React from "react";
import LoginButton from "../components/LoginButton";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20: 0,
    backgroundColor: '#B8B1A1',
  },
  mainlogoArea:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ims:{
    width: 410,
    height: 410,
  },
  login:{
    flex: 0.5,
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