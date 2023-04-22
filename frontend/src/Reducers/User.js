import {createReducer} from '@reduxjs/toolkit';
const initialState={
   isAuthenticate:false,
};

export const userReducer=createReducer(initialState,{
   // for register
      RegisterRequest:(state)=>{
        state.loading=true
     },
      RegisterSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticate=true
     },
      RegisterFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticate=false
     },
     
   // for login
     LoginRequest:(state)=>{
         state.loading=true;
     },
     Loginsuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticate=true
     },
     Loginfailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticate=false
     },

   // for logOut
     LogOutRequest:(state)=>{
         state.loading=true;
     },
     LogOutsuccess:(state)=>{
        state.loading=false;
        state.user=null;
        state.isAuthenticate=false
     },
     LogOutfailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticate=true
     },

    

      UpdatePasswordRequest:(state,action)=>{
        state.loading=true
     },
      UpdatePasswordSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
     },
      UpdatePasswordFailure:(state,action)=>{
        state.loading=false
        state.error=action.payload
     },

   // for loading user data 
     LoadUserRequest:(state,action)=>{
        state.loading=true;
     },
     LoadUserSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticate=true
     },
     LoadUserFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticate=false
     },

      // for delete profile
      deleteProfileRequest:(state)=>{
        state.loading=true
      },
      deleteProfileSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
        state.isAuthenticate=false
      },
      deleteProfileFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },
})

export const postOfFollowingReducer=createReducer(initialState,{
      PostOfFollowingRequest:(state)=>{
          state.loading=true;
      },
      PostOfFollowingSuccess:(state,action)=>{
         state.loading=false;
         state.posts=action.payload;
      },
      PostOfFollowingFailure:(state,action)=>{
         state.loading=false;
         state.error=action.payload
      },
      clearError:(state)=>{
        state.error=null
      }
})   

export const allUsersReducer=createReducer(initialState,{
      allUsersRequest:(state)=>{
          state.loading=true;
      },
      allUsersSuccess:(state,action)=>{
         state.loading=false;
         state.users=action.payload;
      },
      allUsersFailure:(state,action)=>{
         state.loading=false;
         state.error=action.payload
      },
      allUsersError:(state)=>{
        state.error=null
      }
}) 

// all my post reducer
export const myPostReducer=createReducer(initialState,{
    myPostsRequest:(state)=>{
         state.loading=true;
    },
    myPostsSuccess:(state,action)=>{
         state.loading=false;
         state.posts=action.payload
    },
    myPostsFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    clearErrors:(state)=>{
        state.error=null;
    }
})

