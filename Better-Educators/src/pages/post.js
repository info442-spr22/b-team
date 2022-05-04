import { React, useState, useEffect } from 'react';
import '../Post.css'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';


function Post({ isAuth }) {
    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');

    const postsCollectionRef = collection(db, "posts")
    let navigate = useNavigate();
    
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate('/home')
    };
    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, []);

    return (
        <div className='createPostPage'>
            <div className='cpContainer'>
                <h1>Create a Post</h1>
                <div className='inputGp'></div>
                <label>title:</label>
                <input placeholder="title.." onChange={(event) => { setTitle(event.target.value) }} />
                <div className='inputGp'>
                    <label>Post:</label>
                    <textarea placeholder="Post.." onChange={(event) => { setPostText(event.target.value) }} />
                </div>
                <button onClick={createPost}>Submit</button>

            </div>
        </div>
    );
}
export default Post;