import { StyleSheet, Text, View } from 'react-native';
// screens
import MainScreen from './screens/MainScreen';
import DescriptionScreen from './screens/DescriptionScreen';
import SearchScreen from './screens/SearchScreen';
import MyPageScreen from './screens/MyPageScreen';
import LoginScreen from './screens/LoginScreen';
// screen changes
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// for redux: state controll
import { Provider } from 'react-redux';
import { store } from './redux/store';
// bottom navigator

const Stack = createNativeStackNavigator();
const StackNavi = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="main" component={MainScreen} /> */}
      {/* <Stack.Screen name="login" component={LoginScreen} /> */}
      <Stack.Screen name="description" component={DescriptionScreen} />
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="mypage" component={MyPageScreen} />
    </Stack.Navigator>
  )
}


const Tab = createBottomTabNavigator();

const TabNavi = ({ navigation }) => {
  return (
    <NavigationContainer
      screenOptions={({ route }) => ({ headerShown: false })}
      independent={true}
    >
      <Tab.Navigator initialRouteName="description">
        <Tab.Screen name="description" component={DescriptionScreen} />
        <Tab.Screen name="search" component={SearchScreen} />
        <Tab.Screen name="mypage" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='stackNavi'>
          <Stack.Screen name="tabnavi" component={TabNavi} />
          <Stack.Screen name='stackNavi' component={StackNavi} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

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
