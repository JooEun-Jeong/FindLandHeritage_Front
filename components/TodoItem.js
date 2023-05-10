import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native'
import React from 'react'

const TodoItem = () => {
  return (
    <SafeAreaView>
      <View style={{flex:1}}>
        <Pressable style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
          {({pressed}) => <Text>{pressed ? "Pressed" : "Press"}</Text>}
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default TodoItem

const styles = StyleSheet.create({})