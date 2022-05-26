import { React, useState, useEffect } from 'react';
import '../Individual.css';
import { doc, getDoc, collection, addDoc, deleteDoc } from 'firebase/firestore';
import { db, auth, firestore } from '../firebase/firebase';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Comments from './comments';
import { Container } from '../components/container';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function IndividualPost() {
    const [post, setPostInfo] = useState([]);
    const [authorId, setAuthorId] = useState("");
    const [name, setName] = useState("");
    const [user, setUser] = useState({});
    let postId = useParams().postId;

    let navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setIsAuth(true);
                setUser(firebaseUser);
            } else {
                navigate('/login');
            }
        });
        function cleanup() {
            unregisterAuthListener();
        }
        return cleanup;
    }, []);

    const postRef = doc(db, "posts", postId);

    useEffect(() => {
        const getPost = async () => {
            const data = await getDoc(postRef);
            let info = data.data();
            setPostInfo(info);
            setName(info.author.name);
            setAuthorId(info.author.id);
        }
        getPost();
    }, []);

    const triggerText = 'Report Post';
    const onSubmit = (event) => {
        event.preventDefault(event);
        // console.log(event.target.name.value)
        // console.log(event.target.email.value)
        // console.log(event.target.school.value)
        // console.log(event.target.resource.value)
        // console.log(event.target.description.value)
    };
    
    if (isAuth && post) {
        return (
            <div className="individualPage">
                <div className='ip-post' key={post.id} id={post.id}>


                    <div className='ip-postHeader'>
                        <div className='ip-title'>
                            <h1>{post.title}</h1>
                            <h4><pre>{post.location}</pre></h4>
                        </div>
                    </div>
                    <div className='ip-postTextContainer'>{post.postText}</div>
                    <div className='ip-author'>
                        <h4><pre>{name}  |  {new Date(post.date).toLocaleString()}</pre></h4>
                    </div>
                    {(user.uid === authorId) && 
                    <div className="deleteButton">
                        <DeletePost props={{ postId: postId }} /> 
                    </div> }
                </div>
                <Comments />
                <div className="backButton">
                    <button className='back-button'>
                        <Link to={-1}>Back</Link>
                    </button>
                </div>
                <Container triggerText={triggerText} onSubmit={onSubmit} />
            </div>
        );
    };
}

function DeletePost(props) {
    let navigate = useNavigate();
    const postRef = doc(db, "posts", props.props.postId);
    const postDelete = async () => {
        let text = "Are you sure you want to delete the post?";
        if (window.confirm(text) == true) {
            text = "You pressed OK!";
            await deleteDoc(postRef);
            navigate('/home');
        } else {
            text = "You canceled!";
            navigate('/post/' + props.props.postId);
        }
    }
    return (
        <button className='delete-button' onClick={postDelete}>Delete Post</button>
    )
}

export default IndividualPost;