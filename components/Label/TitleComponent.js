import React from 'react'
import { View, Text } from 'react-native'
// import {  } from 'react-native-size-matters'
import Label from './Label'

export default function TitleComp({heading, rightLabel, renderRight, subLabel}) {
    return (
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{}}>
        <Label
          text={heading}
          style={{fontSize: (20), fontWeight: '600'}}
        />
        {subLabel && <Label text={subLabel}  style={{fontSize:(12), opacity:(.5), marginTop:(10)}}/> }
        </View>
        {!renderRight &&rightLabel&&  <Label text={rightLabel} style={{fontSize: (14)}} />}
        {renderRight&&renderRight()}
      </View>
    )
}