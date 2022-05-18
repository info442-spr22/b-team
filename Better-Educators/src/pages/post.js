import { React, useState, useEffect, useRef } from 'react';
import '../Post.css';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Post() {
    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');
    const [location, setLocation] = useState('');
    const textRef = useRef();
    const [postable, setPostable] = useState(null);
    
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setIsAuth(true);
            } else {
                navigate('/login');
            }
        });
        function cleanup() {
            unregisterAuthListener();
        }
        return cleanup;
    }, []);

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        if (title === '' || postText === '') {
            setPostable("Empty Fields!");
        } else {
            await addDoc(postsCollectionRef, {
                title, date: Date.now(), location, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
            });
            navigate('/home');
        }
    };

    return (
        <div className='createPostPage'>
            <div className='cpContainer'>
                <div className="backButton">
                    <button className='goBack'>
                        <Link to={-1}>Back</Link>
                    </button>
                </div>
                <h1>Create a Post</h1>
                <div className='inputGp'>
                    {postable &&
                        <div className="alert" variant='danger' dismissible onClose={() => setPostable(null)}>{postable}</div>
                    }
                    <label>Title:</label>
                    <input placeholder="Title..." onChange={(event) => { setTitle(event.target.value) }} required />
                    <div className='inputGp'>
                        <label>Post:</label>
                        <textarea placeholder="Post..." onChange={(event) => { setPostText(event.target.value) }} required />
                    </div>
                    <label>Location:</label>
                    <input placeholder="Location..." onChange={(event) => { setLocation(event.target.value) }} />
                </div>
                <button className="submitPostButton" onClick={createPost}>Submit</button>

            </div>
        </div>
        
    );
}
export default Post;