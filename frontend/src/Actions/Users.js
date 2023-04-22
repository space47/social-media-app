import axios from 'axios';

// for login user
export const loginUser=(email,password)=>async (dispatch)=>{
      try{
         dispatch({
            type:"LoginRequest",
         });
         
         const {data}=await axios.post("/api/v1/login",{email,password});
         
         dispatch({
            type:'Loginsuccess',
            payload:data.user
         })
      }catch(error){
            dispatch({
            type:'Loginfailure',
            payload:error.response.data.message
         })
      }
}

// for register user
export const registerUser=(name,email,password,avatar)=>async(dispatch)=>{
     try {
         dispatch({
            type:'RegisterRequest'
         })
          
         const {data}=await axios.post('api/v1/register',{
              name,email,password,avatar
         },{
            headers:{
               "Content-Type":"application/json"
            }
         })
         console.log(data)
         dispatch({
            type:'RegisterSuccess',
            payload:data.message
         })
     } catch (error) {
         dispatch({
            type:'RegisterFailure',
            payload:error.response.data.message
         })
     }
}

export const loadUser=()=>async (dispatch)=>{
      try{
         dispatch({
            type:"LoadUserRequest",
         });
         
         const {data}=await axios.get("/api/v1/myProfile");

         dispatch({
            type:'LoadUserSuccess',
            payload:data.user
         })
      }catch(error){
            dispatch({
            type:'LoadUserFailure',
            payload:error.message
         })
      }
}

export const postOfFollowing=()=>async(dispatch)=>{
      try {
          dispatch({
            type:'PostOfFollowingRequest',
          })

          const {data}= await axios.get('/api/v1/posts');

          dispatch({
            type:'PostOfFollowingSuccess',
            payload:data.posts.reverse()
          })


      } catch (error) {
          dispatch({
             type:'PostOfFollowingFailure',
             payload:error.response.data.message
          })
      }
}

export const allUsers=()=>async(dispatch)=>{
      try {
          dispatch({
            type:'allUsersRequest',
          })

          const {data}= await axios.get('/api/v1/users');
          
          dispatch({
            type:'allUsersSuccess',
            payload:data.user
          })


      } catch (error) {
          dispatch({
             type:'allUsersFailure',
             payload:error.response.data.message
          })
      }
}

// for getting own posts
export const myAllPosts=()=>async(dispatch)=>{
      try {
            dispatch({
            type:'myPostsRequest',
          })

            const {data}=await axios.get('/api/v1/my/post');
   
            dispatch({
               type:'myPostsSuccess',
               payload:data.posts
            })

      } catch (error) {
           dispatch({
            type:'myPostsFailure',
            payload:error.response.data.message
           })
      }
}

// for login
export const LogOutUser=()=>async(dispatch)=>{
     try {
          dispatch({
          type:'LogOutRequest'
     })

     await axios.get('/api/v1/logout');

     dispatch({
        type:'LogOutsuccess',
     })

     } catch (error) {
        dispatch({
          type:'LogOutfailure',
          payload:error.response.data.message
        })
     }
} 

// update profile
export const updateProfile=(name,email,avatar)=>async(dispatch)=>{
   try {
      dispatch({
         type:'UpdateRequest'
      })

      const {data}=await axios.put('/api/v1/update/profile',{
          name,email,avatar
      });

      dispatch({
         type:'UpdateSuccess',
         payload:data.message
      })
   } catch (error) {
        dispatch({
         type:'UpdateFailure',
         payload:error.response.data.message
        })
   }
}

// Update Password
export const updatePassword=(oldPassword,newPassword)=>async(dispatch)=>{
     try {
         dispatch({
            type:'UpdatePasswordRequest'
         })

         const {data}=await axios.put('/api/v1/update/password',{
            oldPassword,
            newPassword
         })

         dispatch({
            type:'UpdatePasswordSuccess',
            payload:data.message
         })
     } catch (error) {
         dispatch({
            type:'UpdatePasswordFailure',
            payload:error.response.data.message
         })
     }
}

// delete Profile
export const deleteProfile=()=>async(dispatch)=>{
   try {
      dispatch({
         type:'deleteProfileRequest'
      })

      const {data}=await axios.delete('/api/v1/delete/me');

      dispatch({
         type:'deleteProfileSuccess',
         payload:data.message
      })
   } catch (error) {
      dispatch({
         type:'deleteProfileFailure',
         payload:error.response.data.message
      })
   }
}