// import { SET_ERROR} from "./actionTypes";

// export const setError=(data)=>({
//     type:SET_ERROR,
//     payload:data
//   })
//   /* here you can add your action */

  // Action Types
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
console.log('---FETCH_POSTS_REQUEST-->',FETCH_POSTS_REQUEST);

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

// Action Creators
export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });
export const fetchPostsSuccess = (posts) => ({ type: FETCH_POSTS_SUCCESS, payload: posts });
console.log('---fetchPostsSuccess-->',fetchPostsSuccess);

export const fetchPostsFailure = (error) => ({ type: FETCH_POSTS_FAILURE, payload: error });
