// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import DetailsScreen from './components/DetailsScreen';
import Login from './android/app/screens/Login';
import index from './android/app/screens/SignUp';
import MainStack from './android/app/routing/MainStack';
import HomeScreen from './components/Home';
import ProductDetail from './android/app/screens/ProductDetail';



const RootStack = createNativeStackNavigator({
  initialRouteName: 'ProductDetail',
  screens: {
    ProductDetail: {
      // screen: HomeScreen,
      screen: ProductDetail
      // options: {
      //   title: 'Overview',
      // },
    },
    screen: ProductDetail,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <MainStack/>;
}

// import React from 'react';
// import { Provider } from 'react-redux';
// // Your main app component
// import store from './android/app/redux/stores';
// import MainScreen from './components/Home';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <MainScreen />
//     </Provider>
//   );
// };

// export default App;

// import React, { useEffect } from 'react';
// import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// // import { fetchPostsRequest } from './redux/actions';
// import { Provider } from 'react-redux';
// import store from './android/app/redux/stores';
// import { fetchPostsRequest } from './android/app/redux/actions';
// import Home from './components/Home';
// // import store from './redux/store';

// const AppContent = () => {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state);

//   // useEffect(() => {
//   //   // dispatch(fetchPostsRequest()); // Fetch posts on mount
//   // }, [dispatch]);

//   const renderItem = ({ item }) => (
//     <View style={styles.postItem}>
//       <Text style={styles.postTitle}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Redux-Saga Demo</Text>
//       {loading && <Text>Loading...</Text>}
//       {error && <Text style={styles.error}>Error: {error}</Text>}
//       <FlatList
//         data={posts}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//       />
//       <Button title="Reload Posts" onPress={() => dispatch(fetchPostsRequest())} />
//     </View>
//   );
// };

// const App = () => (
//   <Provider store={store}>
//     <Home />
//   </Provider>
// );

// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  postItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postTitle: {
    fontSize: 18,
  },
  error: {
    color: 'red',
    marginVertical: 8,
  },
});
