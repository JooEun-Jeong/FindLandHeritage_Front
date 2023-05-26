import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import DescriptionScreen from './screens/DescriptionScreen';
import SearchScreen from './screens/SearchScreen';
import MyPageScreen from './screens/MyPageScreen';
import LoginScreen from './screens/LoginScreen';
// import store from './redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="description" component={DescriptionScreen} />
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="mypage" component={MyPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
