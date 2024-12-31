// import { createStore, applyMiddleware } from "redux"
// import createSagaMiddleware from "redux-saga"
// //import AsyncStorage from '@react-native-community/async-storage';  
// import rootSaga from "./sagas"
// import rootReducer from "./reducer"
// import { persistStore, persistReducer } from 'redux-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const sagaMiddleware = createSagaMiddleware()
// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     //blacklist:[ 'auth'/*  'cart' */] //Add reducer if you don`t want to presist it
//   }
// const middleWares = [sagaMiddleware];

// //1
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(persistedReducer, applyMiddleware(...middleWares))
// let persistor = persistStore(store)
// sagaMiddleware.run(rootSaga)

// export default {store,persistor}
// import { createStore } from 'redux';

// // Initial state
// const initialState = {
//   count: 0,
// };
// console.log('-----State--->',initialState);

// // Reducer function
// const reducer = (state = initialState, action) => {
//   console.log('action---->',action.type,'state---->',state);
  
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// // Create store
// const store = createStore(reducer);

// export default store;
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
// import postReducer from './reducers';
// postReducer
import rootSaga from './sagas';
import postReducer from './reucers';

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Redux Store with Middleware
const store = createStore(postReducer, applyMiddleware(sagaMiddleware));

// Run Sagas
sagaMiddleware.run(rootSaga);

export default store;
