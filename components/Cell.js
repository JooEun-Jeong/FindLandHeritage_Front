// https://github.com/dohooo/react-native-reanimated-table
// use this codes for customization///////////////////////////

import React, { useMemo } from 'react';
import CheckBox from "react-native-bouncy-checkbox"; // https://github.com/WrathChaos/react-native-bouncy-checkbox
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  // useDispatch,
} from 'react-native';

export const Cell = ({
  data,
  width,
  height,
  flex,
  style,
  textStyle,
  borderStyle,
  shownId,
  realid,
  ...props
}) => {

  // 각 컴포넌트마다 항목들을 개별적으로 체크하는 상태관리 state
  const [isSelectedCNAME, setIsSelectedCNAME] = React.useState(false);
  const [isSelectedBUYERADDR, setIsSelectedBUYERADDR] = React.useState(false);
  const [isSelectedJIBUN, setIsSelectedJIBUN] = React.useState(false);
  const [isSelectedAREA, setIsSelectedAREA] = React.useState(false);
  const [isSelectedRows, setIsSelectedRows] = React.useState(false);
  // const checkObject = checkObj[0];
  // const pushItem = checkFunc;
  // const dispatch = useDispatch();

  const checkbox = (selectedState, func) => (
    <CheckBox
      isChecked={selectedState}
      onPress={func}
      fillColor="#0CAD60"
      unfillColor="#ffffff"
      iconStyle={{ borderColor: "#C8CAD6" }}
      innerIconStyle={{ borderWidth: 0.5 }}
      style={{ justifyContent: "center", paddingLeft: 10 }}
      size={18}
    />
  )

  // index == 화면에 보이는 번호 (id)
  // console.log("this is index!!! ", realid);
  const handleCheckedItem = (selectState, product) => {
    // 추가하는 경우
    if(!selectState){
      let boolState = true;
      if(product === "c"){
        console.log("hello");
        setIsSelectedCNAME(boolState);
        
        // userId 나중에 변경해줘야함! 세션과 함께~~
        // dispatch(addChecks({
        //   "userId": 1,
        //   "showId": index,
        //   "realId": realid,
        //   "productItem": "c"
        // }))

      }else if(product === "b"){
        pushItem("addb");
        setIsSelectedBUYERADDR(boolState);
      }else if(product === "a"){
        pushItem("adda");
        setIsSelectedAREA(boolState);
      }else if(product === "j"){
        pushItem("addj");
        setIsSelectedJIBUN(boolState);
      }
    }
    // 취소하는 경우
    else{
      let boolState = false;
      if(product === "c"){
        pushItem("deletec");
        setIsSelectedCNAME(boolState);
      }else if(product === "b"){
        pushItem("deleteb");
        setIsSelectedBUYERADDR(boolState);
      }else if(product === "a"){
        pushItem("deletea");
        setIsSelectedAREA(boolState);
      }else if(product === "j"){
        pushItem("deletej");
        setIsSelectedJIBUN(boolState);
      }
    }
  }

  let textDom;
  if (React.isValidElement(data)) {
    textDom = data;
  } else {
    if (data === "CNAME") {
      textDom = checkbox(isSelectedCNAME, (e)=>{handleCheckedItem(e, "c")});
    } else if (data === "BUYERADDR") {
      textDom = checkbox(isSelectedBUYERADDR, setIsSelectedBUYERADDR);
    } else if (data === "JIBUN") {
      textDom = checkbox(isSelectedJIBUN, setIsSelectedJIBUN);
    } else if (data === "AREA") {
      textDom = checkbox(isSelectedAREA, setIsSelectedAREA);
    } else {
      textDom = (
        <Text style={StyleSheet.flatten([textStyle, styles.text])} {...props}>
          {data}
        </Text>
      );
    }
  }

  const borderTopWidth = borderStyle?.borderWidth ?? 0;
  const borderRightWidth = borderTopWidth;
  const borderColor = borderStyle?.borderColor ?? '#000';

  const composedStyles = useMemo(() => {
    const styles = {};
    if (width) {
      styles.width = width;
    }
    if (height) {
      styles.height = height;
    }
    if (flex) {
      styles.flex = flex;
    }
    if (!width && !flex && !height && !style) {
      styles.flex = 1;
    }
    return styles;
  }, [width, height, flex, style]);

  return data ? (
    <View
      style={StyleSheet.flatten([
        {
          borderTopWidth,
          borderRightWidth,
          borderColor,
        },
        styles.cell,
        composedStyles,
        style,
      ])}
    >
      {textDom}
    </View>
  ): null;
};

const styles = StyleSheet.create({
  cell: { justifyContent: 'center', textAlign: 'center', },
  text: { backgroundColor: 'transparent' },
});