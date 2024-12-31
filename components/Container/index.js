import React from 'react'
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native'

export default function Container({children,isScrollable,bodyStyle}) {
    console.log('children-->',children,'isScrollable--->',isScrollable,'bodyStyle---->',bodyStyle);
    
    return (
        <SafeAreaView  style={styles.container}>
            {
                isScrollable? <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
                    <View style={[styles.innerView,bodyStyle]}>
                        {children}
                    </View>
                </ScrollView>
                :
                <View style={[styles.innerView,bodyStyle]}>{children}</View>
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        paddingHorizontal:10
    },
    innerView:{
        flex:1,
       backgroundColor:"yellow",
        //  paddingHorizontal:10
    }
})