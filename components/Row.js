// https://github.com/dohooo/react-native-reanimated-table
// use this codes for customization///////////////////////////

import React, { useMemo } from 'react';
import { View, StyleSheet, ViewStyle, TextStyle, StyleProp, } from 'react-native';
import { Cell } from './Cell';

export const sum = (arr) => arr.reduce((acc, n) => acc + n, 0);

export const Row = ({
  data,
  style,
  widthArr,
  height,
  flexArr,
  textStyle,
  cellTextStyle,
  realid,
  rowindex,
  ...props
}) => {
  const width = widthArr ? sum(widthArr) : 0;

  // console.log(realId)
  const composedStyle = useMemo(() => {
    const styles = {};
    if (width) {
      styles.width = width;
    }
    if (height) {
      styles.height = height;
    }
    return styles;
  }, [width, height]);

  // realId ? console.log(`realId ${realId}\n\n\n`) : realId = -1;
  
  return data ? (
    <View style={StyleSheet.flatten([composedStyle, styles.row, style])}>
      {data.map((item, i) => {
        const flex = flexArr?.[i];
        const wth = widthArr?.[i];
        return (
          <Cell
            key={"row_" + String(i)}
            shownId={rowindex}
            realid={realid ? realid : -2}
            data={item}
            width={wth}
            height={height}
            flex={flex}
            textStyle={StyleSheet.flatten([
              cellTextStyle && cellTextStyle(item),
              textStyle,
            ])}
            {...props}
          />
        );
      })}
    </View>
  ) : null;
};

// data는 id, name, cname, buyer addr, goonli, jibun, area 순서로 배열에 담겨서 나옴
// real data 또한 id, name, cname, buyer addr, goonli, jibun, area 순서로 배열에 담겨서 나옴
export const Rows = ({
  data,
  realData,
  style,
  widthArr,
  heightArr,
  flexArr,
  textStyle,
  ...props
}) => {
  // Variables
  // define in only Rows component 
  const [checkedProductObj, setcheckedProductObj] = React.useState({});

  const flex = flexArr ? sum(flexArr) : 0;
  const width = widthArr ? sum(widthArr) : 0;

  // Functions
  // https://velog.io/@miyoni/checkboxASstate 참고
  // 유저 정보가 담긴 obj: {selectIDs: [], count: {}, product: {}}
  // status: string형태, add? delete?에 대한 정보 담고 있음
  // index: number, map 돌아가면서 할당받는, 화면에 보이는 번호
  // const pushItem = ((status, index) => {
  //   const tempRow = data[index];
  //   console.log("tempR", tempRow);
  //   console.log("type? ", typeof(tempRow));
  //   const tempID = tempRow["ID"];
  //   const productRow = realData[index]; // tempRow와 동일한 순서로 배열에 입력되기 때문에 index를 그대로 사용.
  //   const productID = productRow["ID"]; 
  //   console.log("productR", productRow);
  //   let copyProductObj = Object.assign({}, checkedProductObj);

  //   // 자식 컴포에서 체크박스를 부분 체크했을 경우
  //   if (status.slice(0, 4) === 'add') {
  //     // 보여지는 임시 tempID : 이름이 바뀌었을 경우, selectID의 내용을 변경해줘야함.
  //     if (!copyProductObj["selectIDs"].includes(tempID)) {
  //       copyProductObj["selectIDs"].push(tempID);
  //       copyProductObj["product"][productID] = [false, false, false, false];
  //     }

  //     // cname: 0 / buyeraddr: 1 / jibun: 2 / area: 3
  //     if (status.slice(-1) === 'c') {copyProductObj["product"][productID][0] = true; console.log("hello");}
  //     else if (status.slice(-1) === 'b') copyProductObj["product"][productID][1] = true;
  //     else if (status.slice(-1) === 'j') copyProductObj["product"][productID][2] = true;
  //     else if (status.slice(-1) === 'a') copyProductObj["product"][productID][3] = true;

  //     setcheckedProductObj(copyProductObj);
  //   } else if (status.slice(0,6) === 'delete') {
  //     // 자식 컴포에서 체크박스를 해제했을 경우, 강의명으로 비교하여 해당 원소 삭제
  //     // cname: 0 / buyeraddr: 1 / jibun: 2 / area: 3
  //     if (status.slice(-1) === 'c') copyProductObj["product"][productID][0] = false;
  //     else if (status.slice(-1) === 'b') copyProductObj["product"][productID][1] = false;
  //     else if (status.slice(-1) === 'j') copyProductObj["product"][productID][2] = false;
  //     else if (status.slice(-1) === 'a') copyProductObj["product"][productID][3] = false;
  //     setcheckedProductObj(copyProductObj);
  //   }
  // })

  const composedStyle = useMemo(() => {
    const styles = {}
    if (flex) {
      styles.flex = flex
    }
    if (width) {
      styles.width = width
    }
    return styles
  }, [flex, width])

  // const realIds = [realData.map((item, i) => (item[i]))]
  // const realIds = realData
  // console.log(realIds);
  // data는 id, name, cname, buyer addr, goonli, jibun, area 순서로 배열에 담겨서 나옴
  return data ? (
    <View style={[composedStyle, { justifyContent: 'center', alignItems: 'center' }]}>
      {data && data.map((item, i) => {
        const height = heightArr?.[i];
        const realid = realData ? realData[i][0] : -1;
        // console.log("realid\n", realid);

        return (
          <Row
            key={'rr' + String(i)}
            data={item}
            widthArr={widthArr}
            height={height}
            flexArr={flexArr}
            style={style}
            textStyle={textStyle}
            realid={realid}
            rowindex={i+1}
            {...props}
          />
        );
      })}
    </View>
  ) : null;
};


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});