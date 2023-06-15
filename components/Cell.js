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
} from 'react-native';

export const Cell = ({
  data,
  width,
  height,
  flex,
  style,
  textStyle,
  borderStyle,
  checkObj,
  ...props
}) => {

  // 각 컴포넌트마다 항목들을 개별적으로 체크하는 상태관리 state
  const [isSelectedCNAME, setIsSelectedCNAME] = React.useState(false);
  const [isSelectedBUYERADDR, setIsSelectedBUYERADDR] = React.useState(false);
  const [isSelectedJIBUN, setIsSelectedJIBUN] = React.useState(false);
  const [isSelectedAREA, setIsSelectedAREA] = React.useState(false);
  const [isSelectedRows, setIsSelectedRows] = React.useState(false);
  // const checkObject = checkObj[0];
  const pushItem = checkObj;

  const checkbox = (selectedState, func) => (
    <CheckBox
      isChecked={selectedState}
      onPress={func}
      fillColor="#00FFFF"
      unfillColor="#004AAD"
      iconStyle={{ borderColor: "#00FFFF" }}
      innerIconStyle={{ borderWidth: 1 }}
      style={{ justifyContent: "center", paddingLeft: 10 }}
      size={18}
    />
  )


  let textDom;
  if (React.isValidElement(data)) {
    textDom = data;
  } else {
    if (data === "CNAME") {
      textDom = checkbox(isSelectedCNAME, setIsSelectedCNAME);
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

  return (
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
  );
};

const styles = StyleSheet.create({
  cell: { justifyContent: 'center', textAlign: 'center', },
  text: { backgroundColor: 'transparent' },
});