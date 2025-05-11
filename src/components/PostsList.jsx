import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList(){

    return(
        <ul className={classes.posts}>
            <Post author="Suresh" text="This is an example of prop 1"/>
            <Post author="Ramesh" text="This is an example of prop 2"/>
            <Post author="Mahesh" text="This is an example of prop 3"/>
        </ul>

    );

}

export default PostsList;