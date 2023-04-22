import {configureStore} from '@reduxjs/toolkit';
import { likesReducer } from './Reducers/Post';
import {allUsersReducer, myPostReducer, postOfFollowingReducer, registerUser, userReducer } from './Reducers/User';

const store=configureStore({
    reducer:{
       user:userReducer,
       postOfFollowing:postOfFollowingReducer,
       allUsers:allUsersReducer,
       like:likesReducer,
       myPost:myPostReducer,
    },
});

export default store;


