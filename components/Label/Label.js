import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { appColors } from '../../android/app/utils/appColors'
// import { scale } from 'react-native-size-matters'

export default function Label({text,style}) {
    return (
    <Text style={[styles.label,style]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize:(16),
        color:appColors.black,
        
    }
})