import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import searchRequest from '../functions/searchRequest'
import { Platform } from 'react-native'
import { dev } from '../secrets.json'
import { useDispatch, useSelector } from 'react-redux'
import { clear, insert } from '../redux/slice/landownerSlice'
const secrets = dev;

const InputForm = (props) => {
  const [currentValue, setCurrentValue] = React.useState(props.val);
  const [isSearchScreen, setSearchScreen] = React.useState(props.isGoingSearchScreen);

  // 개발 url depending on platform
  const iosUrl = secrets.iosUrl;
  const androidUrl = secrets.androidUrl;
  const url = Platform.OS === 'ios' ? iosUrl : androidUrl;

  const dispatch = useDispatch();

  const handleSubmit = (json) => {
    dispatch(clear())
    dispatch(insert(json));
  }

  return (
    <View
      behavior={Platform.OS === 'ios' ? 300 : 100}
      style={isSearchScreen ? styles.searchArea: styles.searchAreaInSearchScreen}>
      <TextInput
        style={styles.inputField}
        onChangeText={text => setCurrentValue(text)}
        placeholder=" 이름을 입력해주세요"
        value={currentValue}
      />
      <Pressable
        style={styles.searchButton}
        hitSlop={10}
        pressRetentionOffset={10}
        onPress={async () => {
          const name = currentValue;
          // console.log("Inputform given name: ", name);
          data = await searchRequest(name, url);
          // console.log("this is from Inputform, pressable: ", data)
          handleSubmit(data);
          if (isSearchScreen) {
            props.next.navigate('search', { keyword: currentValue});
            setSearchScreen(false);
          }
        }}
      >
        <Text style={styles.searchText}>검색</Text>
      </Pressable>
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
  searchArea: {
    flex: 1.3,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: "10%",
    paddingRight: "10%",
    alignItems: 'flex-start',
    marginTop: "10%",
  },
  searchAreaInSearchScreen: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inputField: {
    borderColor: 'white',
    backgroundColor: '#ffe',
    flex: 1,
    width: 200,
    height: 35,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 10,
    color: '#000',
    textAlignVertical: 'center'
  },
  searchButton: {
    marginLeft: 10,
    marginRight: 10,
    width: 60,
    height: 35,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
  },
  searchText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
  }
})