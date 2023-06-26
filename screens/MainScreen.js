import { SafeAreaView, StyleSheet, View, StatusBar, Image, Dimensions } from "react-native";
import React from "react";
import LoginButton from "../components/LoginButton";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20: 0,
    backgroundColor: '#ffffff',
  },
  mainlogoArea:{
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ims:{
    width: screenWidth/2,
    height: screenWidth/2+20,
  },
  login:{
    flex: 0.55,
    justifyContent: 'center',
    // marginTop: 200,
  }
})

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'}></StatusBar>
        <View style={styles.mainlogoArea}>
          <Image style={styles.ims} source={require('../assets/imgs/newLogo.png')}/>
        </View>
        {/* <InputForm style={styles.input} /> */}
        <View style={styles.login}>
          <LoginButton next={navigation}/>
        </View>
    </SafeAreaView>
  );

}

export default MainScreen;