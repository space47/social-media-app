import {createReducer} from '@reduxjs/toolkit';

const initialState={

}

export const likesReducer=createReducer(initialState,{
      likeRequest:(state,action)=>{
        state.loading=true
      },
      likeSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
      },
      likeFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },

      //for comments 
      commentRequest:(state)=>{
        state.loading=true
      },
      commentSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
      },
      commentFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },

      //for delete comment
      deleteRequest:(state)=>{
        state.loading=true
      },
      deleteSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
      },
      deleteFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },

      //for delete post
      deletePostRequest:(state)=>{
        state.loading=true
      },
      deletePostSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
      },
      deletePostFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },

      // for New Post
     newPostRequest:(state)=>{
        state.loading=true
      },
      newPostSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
      },
      newPostFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },

      // for update caption
      updateCaptionRequest:(state)=>{
        state.loading=true
      },
      updateCaptionSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
      },
      updateCaptionFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },

      // Update Profile
      UpdateRequest:(state)=>{
        state.loading=true
     },
     UpdateSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
     },
     UpdateFailure:(state,action)=>{
        state.loading=false
        state.error=action.payload
     },

      clearErrors:(state)=>{
        state.error=null
      },
      clearMessage:(state)=>{
        state.message=null
      },
})

