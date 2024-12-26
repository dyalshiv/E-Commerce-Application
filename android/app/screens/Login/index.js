import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
// import {scale} from 'react-native-size-matters';
// import CustomButton from '../../components/CustomButton'
// import Label from '../../components/Label';

import {appColors, shadow} from '../../utils/appColors';
// import {AlertHelper} from '../../utils/AlertHelper';
// import {CommonActions} from '@react-navigation/native';
// import writeData from '../../utils/writeData';
// import ReduxWrapper from '../../utils/ReduxWrapper';
import Container from '../../../../components/Container';
import CustomButton from '../../../../components/CustomButton';
import Label from '../../../../components/Label/Label';
import CustomInput from '../../../../components/CustomInput';

function Login({getProductsList$,loginUser$, navigation}) {

  const [credentials, setCredentials] = useState({});
  const [isloading, setisloading] = useState(false)
console.log('credentials---->',credentials);

//   const onGoogleLogin  =async ()=>{
//    const {user,additionalUserInfo} =await googleLogin()
//   const {email,displayName,uid,photoURL} =user
//    if(additionalUserInfo?.isNewUser){
//     const {providerId,profile} =additionalUserInfo
//      //create new user and login
//     await writeData('users',{email , name: displayName  , uid ,photoURL,providerId,profile} )
//    } 
//    getProductsList$()
//    loginUser$({email , name: displayName  , uid ,photoURL} );
//   }
//   const onLogin = async () => {
//     //auth().signOut()
//     const {email, password} = credentials;

//     try {
//         if(email && password){
//           setisloading(true)
//           const {user,additionalUserInfo} = await auth().signInWithEmailAndPassword(
//           email?.toLowerCase(),
//           password?.toLowerCase(),
//         );
//         console.log(user);
//         if (user?.uid) {
//           if(additionalUserInfo?.isNewUser){
//             const {providerId,profile} =additionalUserInfo
//           //create new user and login
//           await writeData('users',{email :user?.email, name: user?.displayName  , uid:user?.uid  ,photoURL : user?.photoURL  ,providerId,profile} )
//           }
//           loginUser$({email:user?.email, name: user?.displayName ? user?.displayName : "User", uid: user?.uid } );
//           getProductsList$()
//           AlertHelper.show('success', 'Welcome to Amusoftech');
//           navigation.navigate('Home');
//         }
//       }else{
//         setisloading(false)
//         AlertHelper.show('error', 'Email and password is required!!');
//       }
      
//     } catch (error) {
//       AlertHelper.show('error', 'Something went woring');
//     }
//   };

  const onChangeText = (name, text) => {
    setCredentials({...credentials, [name]: text});
  };

  return (
    <Container isScrollable>
      <View
        style={{
        //  marginTop: scale(50),
          marginTop: 50,
          backgroundColor: appColors.white,
          ...shadow,
          padding: 20,
          borderRadius: 5,
        }}>
        <View
          style={{
            // backgroundColor:'red',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            // backgroundColor:"yellow",
          }}>
          <Label
            text="Welcome,"
            style={{fontSize: (30), fontWeight: '700'}}
          />
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Label
              text="Sign Up"
              style={{
                fontSize: (14),
                fontWeight: '500',
                color: appColors.primary,
              }}
            />
          </Pressable>
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
            onChangeText={(text) => onChangeText('name', text)}
            keyboardType="email-address"
            label="Email"
            placeholder="john@doe.com"
          />
        </View>
        <View style={{paddingVertical: (10)}}>
          <CustomInput
            onChangeText={(text) => onChangeText('password', text)}
            secureTextEntry
            label="Password"
            placeholder="Password"
            // value="*******"
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate('Verification')}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingVertical: (10),
          }}>
          <Label
            text="Forgot password"
            style={{
              fontSize: (14),
              // fontWeight: '500',
            }}
          />
        </Pressable>
        <CustomButton label="Sign in" />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: (20),
        }}>
        <Label
          text="-OR-"
          style={{
            fontSize: (18),
            //fontWeight: '500',
          }}
        />
      </View>
      <CustomButton
        // onPress={onGoogleLogin}
        icon="google"
        label="Sign in"
        unFilled
      />
      <CustomButton  icon="twitter" label="Sign in" unFilled />
    </Container>
  );
}

export default Login;