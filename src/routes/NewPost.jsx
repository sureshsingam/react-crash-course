
import { Link, Form, redirect } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';


function NewPost(){

        /* 
        code below does the same thing as below:
        const stateData = useState('');
        stateData[0] // refers to current state value
        stateData[1] // refers to function to update the state
    */
    

    return (
        <Modal>
            <Form method = 'post' className={classes.form} >
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} cols={50} maxLength={500} placeholder="Write your post here..."  />

                </p>

                <p>
                    <label htmlFor="name">Your Name </label>
                    <input type="text" id="name" name="author" required placeholder = "Write your name here" />
                </p>
                <p className = {classes.actions}> 
                    <Link type="button" to="..">Cancel</Link> 
                    <button>Submit</button>
                </p>

            </Form>
        </Modal>

    );
}

export default NewPost;

export async function action({request}) {

    const formData = await request.formData();
    const postData = Object.fromEntries(formData); //{body: '...', author: '...'}
   /*
        const postData = {
                body: request.body.get('body'),
                author: request.body.get('author')
        }
    */
    await fetch('http://localhost:8080/posts',{
        method:'POST',
        body: JSON.stringify(postData),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    return redirect('/'); // redirect to the root route
}