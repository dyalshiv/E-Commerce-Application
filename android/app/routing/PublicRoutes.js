import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ProductDetail from '../screens/ProductDetail';


// import Verification from '../screens/Verification';
// import Welcome from '../screens/Welcome';
export const publicRoutes = [
  {
    name: 'ProductDetail',
    component: ProductDetail,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'ProductDetail',
    },
    
  },
  {
    name: 'Login',
    component: Login,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'Login',
    },
  },
  {
    name: 'SignUp',
    component: SignUp,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'SignUp',
    },
    
  },
  // {
  //   name: 'ProductDetail',
  //   component: ProductDetail,
  //   options: {
  //     tabBarButton: (props) => null,
  //     tabBarVisible: false,
  //     tabBarBadge: 3,
  //     tabBarLabel: 'ProductDetail',
  //   },
    
  // },

//   {
//     name: 'Verification',
//     component: Verification,
//     options: {
//       tabBarButton: (props) => null,
//       tabBarVisible: false,
//       tabBarBadge: 3,
//       tabBarLabel: 'Verification',
//     },
//   },
];