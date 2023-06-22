import { StyleSheet, ScrollView, View, Dimensions } from 'react-native'
import React from 'react'
// import { Table, Row, Rows } from 'react-native-table-component';
import { Table, TableWrapper, Col } from 'react-native-table-component';
import { Row, Rows } from './Row'

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const TableData = (props) => {
  const heads = ['번호', '성명', '한자', '매수자 주소', '매수 지역', '매수\n지번', '평수'];
  // let dataLength = datalst.length;
  const [datalst, setDatalst] = React.useState(props.datalst);
  const [isFound, setIsFound] = React.useState(props.isFound);

  // all columns state management
  const [isSelectedAllCNAME, setIsSelectedAllCNAME] = React.useState(false);
  const [isSelectedAllBUYERADDR, setIsSelectedAllBUYERADDR] = React.useState(false);
  const [isSelectedAllJIBUN, setIsSelectedAllJIBUN] = React.useState(false);
  const [isSelectedAllAREA, setIsSelectedAllAREA] = React.useState(false);
  const [isSelectedAllRows, setIsSelectedAllRows] = React.useState(false);

  // some columns state management
  // at least one element is selected, it is true
  const [isSelectedSomeCNAME, setIsSelectedSomeCNAME] = React.useState(false);
  const [isSelectedSomeBUYERADDR, setIsSelectedSomeBUYERADDR] = React.useState(false);
  const [isSelectedSomeJIBUN, setIsSelectedSomeJIBUN] = React.useState(false);
  const [isSelectedSomeAREA, setIsSelectedSomeAREA] = React.useState(false);
  const [isSelectedSomeRows, setIsSelectedSomeRows] = React.useState(false);


  console.log("This is from Table component: ");
  // console.log(datalst)

  // put landowner data lst in list
  const rows = []; // rows that will be shown
  const rows_real = []; // rows that has real data
  datalst.map((item, index) => {
    const row = [
      (index + 1),
      item.NAME,
      "CNAME",
      "BUYERADDR",
      item.GOON + " " + item.LI,
      "JIBUN",
      "AREA"
    ]
    rows.push(row);
    const row_real = [item.ID, item.NAME, item.CNAME, item.BUYERADDR, item.GOON + " " + item.LI, item.JIBUN, item.AREA]
    rows_real.push(row_real);
  })

  // rows.push([rows.length+1, 'g', 'g', 'g', 'g', 'g', 'g']);
  // rows.push([rows.length+2, 'g', 'g', 'g', 'g', 'g', 'g']);
  // rows.push([rows.length+3, 'g', 'g', 'g', 'g', 'g', 'g']);
  // flatlist 어떻게 사용하는지 알아야!

  const w = screenWidth * 0.95;
  const widthArrStyle = [0.1 * w, 0.1 * w, 0.1 * w, 0.25 * w, 0.2 * w, 0.1 * w, 0.15 * w];
  return (
    <ScrollView style={styles.containerData}>
      <Table>
        <Row data={heads} style={styles.headstyle} textStyle={[styles.text, styles.headText]} widthArr={widthArrStyle} />
        <Rows data={rows} realData={rows_real} style={styles.contentStyle} textStyle={[styles.text, styles.contentText]} widthArr={widthArrStyle} />
      </Table>
    </ScrollView>
  )
}






export const TableSelected = (props) => {
  const [userInfo, setUserInfo] = React.useState(props.entities);
  // entities의 구조: 
  /**
    "userId": {
    "selectIDs": [],
    "count": {
      "cname": 0,
      "buyerAddr": 0,
      "jibun": 0,
      "area": 0
    },
    "selectedProduct": {
      "254": [
        false,
        false,
        false,
        false
      ]
    },
    "paidProduct": {
      "254": [
        false,
        false,
        false,
        false
      ]
    }
  }
   */
  const userCountInfo = userInfo["userId"]["count"];

  const heads = ['', '한자', '매수자주소', '', '매수지번', '평수'];
  const titles = ['개수', '금액(원)'];
  const costs = [[
    userCountInfo["cname"] ? userCountInfo["cname"] : 0,
    userCountInfo["buyerAddr"] ? userCountInfo["buyerAddr"] : 0,
    '',
    userCountInfo["jibun"] ? userCountInfo["jibun"] : 0,
    userCountInfo["area"] ? userCountInfo["area"] : 0], ['1000', '2000', '', '20,000', '7,000']]

  return (
    <View style={styles.containerResult}>
      <Table>
        <Row flexArr={[1.5, 1, 2, 1, 1]} data={heads} style={styles.headstyle} textStyle={[styles.text, styles.headText]} />
        <TableWrapper style={styles.wrapper}>
          <Col heightArr={[20, 20]} data={titles} style={styles.colstyle} textStyle={{
            textAlign: 'center', fontSize: 12, fontWeight: 'bold',
          }} />
          <Rows flexArr={[1, 2, 1, 1, 1]} data={costs} style={styles.contentResultStyle} textStyle={[styles.text, styles.contentText]} />
        </TableWrapper>
      </Table>
    </View>
  );

}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row' },
  containerData: {
    // flex: 1,
    padding: 16,
    // alignItems: 'center',
  },
  containerResult: {
    width: screenWidth,
    padding: 16,
  },
  headText: {
    fontSize: 12,
  },
  headstyle: {
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "white",
    borderTopWidth: 0.5,
    borderTopColor: "white",
  },
  colstyle: {
    padding: 10,
  },
  contentText: {
    fontSize: 12,
  },
  contentStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 1.5,
  },
  contentResultStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    fontSize: 12,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})