import React from 'react';
import {View, Pressable, Image} from 'react-native';
import { appColors } from '../android/app/utils/appColors';
import Label from './Label/Label';

export default function ({navigation, item}) {
  const {title,name, description, price, image, isNew,rating} = item;
  //console.log({item});
  return (
    <Pressable onPress={() => navigation.navigate('ProductDetails',{item})} style={{}}>
      <View
        style={{
          height: (200),
           width: (160),
          //backgroundColor:appColors.lightGray
        }}>
        <Image 
        resizeMode='contain'
        style={{height:(200), width:(180)}} 
        source={{ uri:image}} />
        {isNew && (
          <View
            style={{
              backgroundColor:appColors.red,
              position: 'absolute',
              top: (10),
              right: (20),
              padding: (3),
              borderRadius: (3),
              paddingHorizontal: (10),
            }}>
             
            <Label text="New" style={{fontSize:(10), color:appColors.white}} />
          </View>
        )}
      </View>
      <View style={{paddingVertical: (3)}}>
        <Label text={title?.substring(0, 20)} style={{fontSize: (18), fontWeight: '500'}} />
      </View>

      <View style={{paddingVertical: (2)}}>
        <Label
          text={description?.substring(0, 24)}
          style={{fontSize: (13), color: appColors.darkGray}}
        />
      </View>

      <View style={{paddingVertical: (5)}}>
        <Label
          text={price}
          style={{
            fontSize: (18),
            color: appColors.primary,
            fontWeight: '500',
          }}
        />
      </View>
    </Pressable>
  );
}