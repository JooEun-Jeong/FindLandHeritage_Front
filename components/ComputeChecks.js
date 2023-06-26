import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { paymentSystem } from '../functions/paymentSystem';

const ComputeChecks = ({ entities }) => {
  const [computeResult, setComputeResult] = React.useState(0);

  React.
    useEffect(() => {
      const value = entities["count"]["cname"] * 1000 + entities["count"]["buyerAddr"] * 2000 + entities["count"]["jibun"] * 20000 + entities["count"]["area"] * 7000
      
      setComputeResult(value);
    }, [entities]);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.computeResult}>
          <Text style={styles.text}>총액</Text>
          <View style={styles.space} />
          <Text style={styles.text}>{computeResult}원</Text>
        </View>
        <Pressable
          style={styles.payButton}
          hitSlop={10}
          pressRetentionOffset={10}
          onPress={paymentSystem}
        >
          <Text style={styles.text}>결제하기</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ComputeChecks

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  computeResult: {
    backgroundColor: "#F4F4F6",
    borderRadius: 5,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "60%",
    padding: 2,
  },
  payButton: {
    backgroundColor: "#F7E600",
    borderRadius: 5,
    padding: 2,
    flexDirection: 'row',
    width: "25%",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 13,
    padding: 5,
  },
  space: {
    flexGrow: 1,
  }
})