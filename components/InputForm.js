import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'

const InputForm = (props) => {
  const [currentValue, setCurrentValue] = React.useState(props.val);
  const [isSearchScreen, setSearchScreen] = React.useState(props.isSearchScreen);
  return (
    <View
      behavior={Platform.OS === 'ios' ? 300 : 100}
      style={isSearchScreen ? styles.searchAreaInSearchScreen : styles.searchArea}>
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
        onPress={() => {
          props.next.navigate('search', {keyword: currentValue});
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
  searchAreaInSearchScreen:{
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
  searchText:{
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 10,
  }
})