import { useState } from "react";

import Post from "./Post";
import Modal from "./Modal";
import NewPost from "./NewPost";

import classes from './PostsList.module.css';


function PostsList( {onStopPosting, isPosting}){
    const [posts, setPosts]= useState([]);

    function addPostHandler(postData){
        /*
        setPosts([postData, ...posts]);  // use spread operator to add new post to the beginning of the array
        // not optimal but works
        */

        setPosts((existingPosts) =>  [postData, ...existingPosts]); 
        // use function to get the previous state and add new post to the beginning of the array
    }
    
    return(
        <>
            {isPosting ? (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>                
                </Modal>
            ) : null}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map( (post)=>
                        <Post key={post.body} author={post.author} text={post.body}/>
                    )}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign:'center', color:'white'}}>
                    <h2>  There are no posts yet. </h2> 
                    <p> Start adding some </p>
                </div>

            )}
        </>

    );

}

export default PostsList;