import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Table, Row, Rows } from 'react-native-table-component';

const heads = ['번호', '성명', '한자', '매수자\n주소', '매수\n지역', '매수\n지번', '면적'];

const TableData = (props) => {
  // let dataLength = datalst.length;
  const [datalst, setDatalst] = React.useState(props.datalst);
  const [isFound, setIsFound] = React.useState(props.isFound);
  console.log("This is from Table component: ")
  // console.log(datalst)

  const rows = [];
  datalst.map((item, index) => {
    const row = [(index+1), item.NAME, item.CNAME, item.BUYERADDR, item.GOON + " " + item.LI, item.JIBUN, item.AREA]
    rows.push(row);
  })

  // flatlist 어떻게 사용하는지 알아야!
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1, borderColor:"gray"}}>
        <Row data={heads} textStyle={[styles.text, styles.head]} style={styles.headstyle}/>
        <Rows data={rows} style={{alignContent: 'center',}} textStyle={[styles.text, styles.content]} />
      </Table>
    </View>
  )
}

export default TableData

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
  },
  head: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  headstyle: {
    height: 60,
    alignContent: 'center',
  },
  content: {
    fontSize: 10,
  },
  text:{
    color: 'white',
    textAlign: 'center',
  }
})