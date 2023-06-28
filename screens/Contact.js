import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native'
import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState("");
  const [grandName, setGrandName] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [etc, setEtc] = useState("");

  const item = (title, stateChangeFunc, state, placeholder) => (
    <View style={styles.content}>
      <Text style={styles.writeName}>{title}:</Text>
      <View style={styles.space} />
      <TextInput
        style={styles.inputField}
        onChangeText={stateChangeFunc}
        placeholder={placeholder}
        value={state}
      />
    </View>
  )

  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 20 : 0,
      backgroundColor: '#ffffff'
    }} behavior={Platform.OS === 'ios' ? 300 : 100}>

      <View style={styles.head}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, }}>문의</Text>
      </View>

      <View style={styles.inquiryArea}>

        {item("이름", setName, name, "이름을 입력해주세요")}

        {item("조상이름", setGrandName, grandName, "조상이름을 입력해주세요")}

        <View style={styles.content}>
          <Text style={styles.writeName}>문의내용: </Text>
          <View style={styles.space} />
          <TextInput
            style={styles.inputField}
            onChangeText={text => setInquiry(text)}
            placeholder="문의내용을 입력해주세요"
            textAlignVertical="top"
            value={inquiry}
            numberOfLines={5}
            multiline={true}
          />
        </View>

        {item("전화번호", setPhoneNumber, phoneNumber, "전화번호를 입력해주세요")}

        <View style={styles.content}>
          <Text style={styles.writeName}>기타내용: </Text>
          <View style={styles.space} />
          <TextInput
            style={styles.inputField}
            onChangeText={text => setEtc(text)}
            placeholder=""
            value={etc}
            multiline={true}
          />
        </View>
      </View>

      <View style={styles.buttonArea}>
        <Pressable
          style={styles.sendButton}
          hitSlop={10}
          pressRetentionOffset={10}
          onPress={async () => {
            handleSubmit(data);
          }}
        >
          <Text style={styles.buttonText}>문의하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Contact

const styles = StyleSheet.create({
  head: {
    flex: 0.2,
    marginLeft: 16,
    justifyContent: 'flex-end',
  },
  inputField: {
    borderColor: '#C8CAD6',
    borderWidth: 0.3,
    width: '80%',
    flexWrap: 'wrap',
    padding: 3,
  },
  inquiryArea: {
    backgroundColor: '#F4F4F6',
    borderRadius: 5,
    margin: 16,
    padding: 10,
  },
  writeName: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  space: {
    flexGrow: 1,
  },
  buttonArea: {
    justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  sendButton: {
    backgroundColor: "#F7E600",
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  }
})