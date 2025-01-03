import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
// import Container from '../../components/Container';
// import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/CustomButton';
// import Label from '../../components/Label';
// import {appColors, shadow} from '../../utils/appColors';
// import Feather from 'react-native-vector-icons/Feather';
// import auth from '@react-native-firebase/auth';
//  import {AlertHelper} from '../../utils/AlertHelper'
import Container from '../../../../components/Container';
import CustomInput from '../../../../components/CustomInput';
import CustomButton from '../../../../components/CustomButton';
import Label from '../../../../components/Label/Label';
import { appColors,shadow } from '../../utils/appColors';
// import Feather from '@react-native-vector-icons/feather';
export default function index({navigation}) {
  const [userInfo, setUserInfo] = useState({});
  const onChnage = (name, text) => {
    setUserInfo({...userInfo, [name]: text});
  };

//   const onSignUp =async () => {
//     // const {email,password}=userInfo
//     // const user = await auth().createUserWithEmailAndPassword(email,password)
//     // if(user?.user.uid){
//     //   AlertHelper.show("success", "Signup Success, Welcome to Amusoftech")
//     //   navigation.navigate("Home")
//     // }else{
//     //   AlertHelper.show("error", "Signup Failed, Please Retry")
//     // } 

//   };
  return (
    <Container isScrollable>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{marginTop: (30)}}>
        {/* <Feather name={'chevron-left'} size={(25)} /> */}
        {/* <Feather name="house" color="#ff0000" size={20} /> */}
      
      </Pressable>
      <View
        style={{
          marginTop: (70),
          backgroundColor: appColors.white,
          ...shadow,
          padding: (15),
          borderRadius: (5),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Label
            text="Sign Up"
            style={{fontSize: (30), fontWeight: '700'}}
          />
        </View>
        <View style={{paddingVertical: (15)}}>
          <Label
            text="Sign in to Continue"
            style={{
              fontSize: (16),
              //fontWeight: '500',
              color: appColors.darkGray,
            }}
          />
        </View>
        <View style={{paddingVertical: (10)}}>
          <CustomInput
            onChangeText={(text) => onChnage('name', text)}
            label="Name"
            placeholder="Amusoftech"
          />
        </View>
        <View style={{paddingVertical: (10)}}>
          <CustomInput
            onChangeText={(text) => onChnage('email', text)}
            keyboardType="email-address"
            label="Email"
            placeholder="john@doe.com"
          />
        </View>
        <View style={{paddingVertical: (10)}}>
          <CustomInput
            onChangeText={(text) => onChnage('password', text)}
            secureTextEntry
            label="Password"
            placeholder="Password"
          />
        </View>
        <CustomButton label="Sign up" />
      </View>
    </Container>
  );
}