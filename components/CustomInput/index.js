import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Label from '../Label/Label';
import { appColors } from '../../android/app/utils/appColors';
export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  InputStyle,
  IconRight,
  IconLeft,
  label,
  containerStyle
}) {
  console.log('onChangeText---------->',onChangeText,value);
  
  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setFocused(!focused);
  };
  return (
    <View
      style={[
        styles.container,containerStyle,
        focused ? styles.activeBorder : styles.blurBorder,
      ]}>
      {label && (
        <View style={{paddingVertical: (10)}}>
          <Label style={{color: appColors.darkGray}} text={label} />
        </View>
      )}
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          {IconLeft && <IconLeft />}
      <TextInput
        placeholder={placeholder}
        value={value}
       onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input, InputStyle]}
        onBlur={onFocus}
        onFocus={onFocus}
      />
      {IconRight && <IconRight />}
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    //paddingHorizontal: (10),
    //margin: (5),
    //height: (45),
    // alignItems: "center",
    backgroundColor: appColors.white,
    borderBottomWidth: (0.4),
    // borderRadius:(25),
    // ...shadow
  },
  input: {
    //backgroundColor:'red',
    // height:(90),
    paddingVertical: (10),
    // flex: 1,
    fontSize: (14),
  },
  blurBorder: {
    borderColor: appColors.darkGray,
  },
  activeBorder: {
    borderColor: appColors.primary,
    borderBottomWidth: (1),
  },
});