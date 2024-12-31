import React, {useState} from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
import Container from '../../../../components/Container';
import { appColors } from '../../utils/appColors';
import Label from '../../../../components/Label/Label';
import CustomButton from '../../../../components/CustomButton';
import { productDetail } from '../../utils/MockData';
// import {appColors, shadow} from '../../utils/appColors';
// import Container from '../../../../components/Container';
// import CustomButton from '../../../../components/CustomButton';
// import Label from '../../../../components/Label/Label';
// import CustomInput from '../../../../components/CustomInput';

export default function ProductDetail() {
  const {name,detail,price,size,color} = productDetail
  return (
    <Container isScrollable>
      <ImageBackground resizeMode='cover' style={{height:400,width:"auto"}} source={require('../../statics/images/products/2.png')}>
        <Text>IMage</Text>
      </ImageBackground>
      <View>
        <Label text={name} style={{fontSize:20}}/>
        {/* <Text>p Detail</Text> */}
      </View>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>

      <View style={{flex:0.4,
           justifyContent:'space-between',
           alignItems:"center",
           padding:10,
           backgroundColor:appColors.white,
           borderRadius:20,
           paddingHorizontal:10,
           flexDirection:"row"}}>  
        <Label text={'Size'} style={{fontSize:20}}/>
        <Label text={'XL'} style={{fontSize:20}}/>
      </View>

      <View style={{flex:0.4,
           justifyContent:'space-between',
           alignItems:"center",
           padding:10,
           backgroundColor:appColors.white,
           borderRadius:20,
           paddingHorizontal:10,
           flexDirection:"row"}}>
        <Label text={'Size'} style={{fontSize:20}}>Color</Label>
        <View style={{height:20,width:20,backgroundColor:'red',borderRadius:10}}></View>        

      </View>
    </View>
    <Text>Details</Text>
    <Text>Long Details</Text>
  <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
     <View>
      <Label text={'Price'} style={{fontSize:20}}/>
      <Label text={'$1000'} style={{fontSize:20}}/>
      {/* <Text>$100000</Text> */}
    </View>

    <View>
      <CustomButton label={'Add'}/>
      {/* <Text numberOfLines={1}>Price</Text>
      <Text numberOfLines={1}>$100000</Text> */}
    </View>
</View>
    <View>

    </View>
    </Container>
  );
}
