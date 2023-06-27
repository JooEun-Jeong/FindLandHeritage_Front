import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import searchRequest from '../functions/searchRequest'
import { Platform } from 'react-native'
import { useDispatch } from 'react-redux'
import { clear, insert } from '../redux/slice/landownerSlice'
import { reinitializeState } from '../redux/slice/userSlice'
import { dev } from '../config/secrets.json'
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
    dispatch(reinitializeState());
    dispatch(clear())
    dispatch(insert(json));
  }

  // 모달과 함께 조합하여 로딩 이미지를 보여주도록 함
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <View
      behavior={Platform.OS === 'ios' ? 300 : 100}
      // style={isSearchScreen ? styles.searchArea: styles.searchAreaInSearchScreen}>
      style={styles.searchAreaInSearchScreen}>
      <TextInput
        style={[styles.inputField,
        { 
          borderColor: !isLoading ?'white' : 'rgba(0,0,0,0.2)',
          backgroundColor: !isLoading ? '#ECECEC' : "rgba(0,0,0,0.1)", }
        ]}
        onChangeText={text => setCurrentValue(text)}
        placeholder="이름을 입력해주세요"
        value={currentValue}
      />
      <Pressable
        style={styles.searchButton}
        hitSlop={10}
        pressRetentionOffset={10}
        onPress={async () => {
          const name = currentValue;
          props.setLoading(true);
          setIsLoading(true);
          data = await searchRequest(name, url);
          handleSubmit(data);
          if (isSearchScreen) {
            props.next.navigate('searchStackNavi', { screen: 'searchR', params: {keyword: currentValue} });
            setSearchScreen(false);
          }
          props.setLoading(false);
          setIsLoading(false);
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
    flex: 1,
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
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    width: 200,
    height: 45,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 38,
    fontSize: 14,
    color: '#000',
    paddingLeft: 10,
    textAlignVertical: 'center'
  },
  searchButton: {
    marginLeft: 10,
    marginRight: 10,
    width: 60,
    height: 45,
    borderRadius: 38,
    borderColor: '#black',
    borderWidth: 1,
    justifyContent: 'center',
  },
  searchText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 10,
  }
})