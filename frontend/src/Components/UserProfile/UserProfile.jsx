import { Avatar, Button, Dialog, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Post from '../Post/Post';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import User from '../User/User';
import { getUserProfile} from '../../Actions/Users';

const UserProfile = () => {
  const dispatch=useDispatch();
  const alert=useAlert();

  const {user,loading:userloading}=useSelector(state=>state.user);
  const {userProfile,loading:userProfileloading}=useSelector(state=>state.like);
  const {loading,error,posts}=useSelector(state=>state.myPost);
  const {error:likeError,message,loading: deleteLoading,}=useSelector(state=>state.like);
  const [followersToggle,setFollowersToggle]=useState(false);
  const [followingToggle,setFollowingToggle]=useState(false);
  const [following,setFollowing]=useState(false);
  const [isProfile,setIsProfile]=useState(false);
  
  const params=useParams();
  console.log(userProfile)

  useEffect(() => {
      if(user._id===params.id){
           setIsProfile(true)
      }
      dispatch(getUserProfile(params.id))
  }, [dispatch,user.id,params.id])
    

    useEffect(() => {
         if(error){
          alert.error(error);
          dispatch({
             type:"clearErrors"
          })
         }
         if(likeError){
            alert.error(likeError)
            dispatch({
                type:'clearErrors'
            })
         }
         if(message){
            alert.success(message)
            dispatch({
                type:'clearMessage'
            })
         }
    
    }, [alert,error,likeError,message,dispatch])
  
  return (
      loading===true || userloading===true?<Loader/>:(
        <div className='account'>
              <div className='accountLeft'>
                     {
                    posts && posts.length>0?posts.map((post)=>(
                         <Post  
                                key={post._id}
                                postId={post._id}
                                caption={post.caption}
                                postImage={post.imageUrl.url}
                                likes = {post.likes}
                                comments = {post.comments}
                                ownerImage={post.owner.avatar.url}
                                ownerName={post.owner.name}
                                ownerId={post.owner._id}
                                isDelete = {true}
                                isAccount = {true}
                         />
                    )):<Typography variant='h6' margin='2vmax'>No posts available</Typography>
                  }
              </div>
              <div className='accountright'>
                   <Avatar src={userProfile.avatar.url}  sx={{height:"7vmax",width:"7vmax"}} marginTop={"2vmax"}/>
                   <Typography variant="h6" marginTop={"1vmax"} color={'#3B3B3B'} marginBottom={"2vmax"}>{userProfile.name}</Typography>
                   <div className='a'>
                      <button onClick={()=>setFollowingToggle(!followingToggle)}>Following {user.following.length}</button>
                   </div>
                    <div className='a'>
                      <button onClick={()=>setFollowersToggle(!followersToggle)}>Followers {user.followers.length}</button>
                   </div>
                    <div className='a'>
                       Posts {userProfile.posts.length}
                   </div>
                  {
                    isProfile?null: <Button variant="contained" onClick={()=>setFollowing(!following)} style={{backgroundColor:following?"red":""}}>{
                       following?"UnFollow":"Follow"
                   }</Button>
                  }

                    {/* DialogBox for followers */}
                    <Dialog open={followersToggle} onClose={() => { setFollowersToggle(!followersToggle) }}>
                        <div className='dialogBox'>
                           <Typography variant='h6'>Followers</Typography>
                    {
                         user && user.followers.length>0?user.followers.map((follower)=>(
                              <User key={follower._id} name={follower.name} avatar={follower.avatar.url} userId={follower._id} />
                         )):<Typography style={{margin:'2vmax'}}>No Followers present</Typography>
                    }
                </div>
            </Dialog>

             {/* DialogBox for following */}
                    <Dialog open={followingToggle} onClose={() => { setFollowingToggle(!followingToggle) }}>
                        <div className='dialogBox'>
                           <Typography variant='h6'>Following</Typography>
                    {
                         user && user.following.length>0?user.following.map((follow)=>(
                              <User key={follow._id} name={follow.name} avatar={follow.avatar.url} userId={follow._id} />
                         )):<Typography style={{margin:'2vmax'}}>User has not made any posts</Typography>
                    }
                </div>
            </Dialog>
              </div>
        </div>
      )
  )
}

export default UserProfile