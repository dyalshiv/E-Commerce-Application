// // In App.js in a new project

// import * as React from 'react';
// import { View, Text, Button, TouchableOpacity } from 'react-native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import {
// //   createStaticNavigation,
// //   useNavigation,
// // } from '@react-navigation/native';
// // import DetailsScreen from './components/DetailsScreen';
// // import Login from './android/app/screens/Login';
// // import index from './android/app/screens/SignUp';
// import MainStack from './android/app/routing/MainStack';

// // import HomeScreen from './components/Home';



// // const RootStack = createNativeStackNavigator({
// //   initialRouteName: 'Login',
// //   screens: {
// //     Login: {
// //       // screen: HomeScreen,
// //       screen: Login
// //       // options: {
// //       //   title: 'Overview',
// //       // },
// //     },
// //     screen: index,
// //   },
// // });

// // const Navigation = createStaticNavigation(RootStack);

// export default function App() {
//   return <MainStack/>;
// }

import React from 'react';
import { Provider } from 'react-redux';
// Your main app component
import store from './android/app/redux/stores';
import MainScreen from './components/Home';

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;