
import {useState} from 'react';

import classes from './NewPost.module.css';


function NewPost({onCancel, onAddPost}){

        /* 
        code below does the same thing as below:
        const stateData = useState('');
        stateData[0] // refers to current state value
        stateData[1] // refers to function to update the state
    */
        const [enteredBody, setEnteredBody] = useState('');
        const [enteredAuthor, setEnteredAuthor] = useState('');
    
    
        function bodyChangeHandler(event){
            setEnteredBody(event.target.value);
        }
    
        function authorChangeHandler(event){
            setEnteredAuthor(event.target.value);
        }

        function submitHandler(event){
            event.preventDefault();
            const postData = {
                body: enteredBody,
                author: enteredAuthor
            };
            console.log(postData);

            // add the post data to list of posts
            onAddPost(postData);

            // calling onCancel to close the model
            onCancel(); // the function is passed from the parent component via prop. so to execute, use the parenthesis to call it.
        }
    

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} cols={50} maxLength={500} placeholder="Write your post here..." onChange={bodyChangeHandler} />

            </p>

            <p>
                <label htmlFor="name">Your Name </label>
                <input type="text" id="name" required placeholder = "Write your name here" onChange={authorChangeHandler}/>
            </p>
            <p className = {classes.actions}> 
                <button type="button" onClick={onCancel}>Cancel</button> 
                <button>Submit</button>
            </p>

        </form>

    );
}

export default NewPost;