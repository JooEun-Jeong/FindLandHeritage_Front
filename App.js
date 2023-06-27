import { StyleSheet, Image } from 'react-native';
// screens
import MainScreen from './screens/MainScreen';
import DescriptionScreen from './screens/DescriptionScreen';
import SearchScreen from './screens/SearchScreen';
import MyPageScreen from './screens/MyPageScreen';
import LoginScreen from './screens/LoginScreen';
import Contact from './screens/Contact';
// screen changes
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// for redux: state controll
import { Provider } from 'react-redux';
import { store } from './redux/store';
// bottom navigator

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SearchStackNavi = (({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="description">
      <Stack.Screen name="description" component={DescriptionScreen} />
      <Stack.Screen name="searchR" component={SearchScreen} />
    </Stack.Navigator>
  )
})

const TabNavi = ({ navigation }) => {
  const tabScreen = (name, component, tabBarLabel, im1, im2) => (
    <Tab.Screen name={name} component={component}
      options={{
        tabBarLabel: tabBarLabel,
        tabBarLabelStyle: {
          paddingBottom: 8,
        },
        tabBarIcon: ({ focused }) => (
          <Image source={focused ? im1 : im2}
            style={{ width: 20, height: 20, }} />
        ),
        unmountOnBlur: true,
      }} />)
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarStyle: {
            height: 50,
            borderTopWidth: 0.5,
            borderTopColor: "#E9E9E9",
            backgroundColor: "#FFFFFF",
          }
        }}
      >
        {tabScreen("searchStackNavi", SearchStackNavi, "검색",
          require('./assets/imgs/menu/search.png'),
          require('./assets/imgs/menu/search_gray.png'))}
        {tabScreen("mypage", MyPageScreen, "마이페이지",
          require('./assets/imgs/menu/user.png'),
          require('./assets/imgs/menu/user_gray.png'))}
        {tabScreen("contact", Contact, "문의",
          require('./assets/imgs/menu/mail.png'),
          require('./assets/imgs/menu/mail_gray.png'))}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const StackNavi = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="tabNavi" component={TabNavi} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animationEnabled: false, }}
          initialRouteName='stackNavi'
        >
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
