import { React, useState, useEffect } from 'react';
import '../Individual.css';
import { doc, getDoc, collection, addDoc, deleteDoc } from 'firebase/firestore'
import { db, auth, firestore } from '../firebase/firebase';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Comments from './comments';
import { Link } from 'react-router-dom';


function IndividualPost({ isAuth }) {
    const [post, setPostInfo] = useState([]);
    const [name, setName] = useState("");
    let postId = useParams().postId;

    const postRef = doc(db, "posts", postId);
    let navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
        const getPost = async () => {
            const data = await getDoc(postRef);
            let info = data.data();
            setPostInfo(info);
            setName(info.author.name);
        }
        getPost();
    }, []);
    if (isAuth && post) {
        return (
            <div className="individualPage">
                <div className='ip-post' key={post.id} id={post.id}>
                    <div className="backButton">
                        <button>
                            <Link to={-1}>Back</Link>
                        </button>
                    </div>
                    <div className="deleteButton">
                        <DeletePost props={{ postId: postId }} />
                    </div>
                    <div className='ip-postHeader'>
                        <div className='ip-title'>
                            <h1>{post.title}</h1>
                            <h4><pre>{post.location}</pre></h4>
                        </div>
                        <div className='ip-author'>
                            <h4><pre>{name}  |  {new Date(post.date).toLocaleString()}</pre></h4>
                        </div>
                    </div>
                    <div className='ip-postTextContainer'>{post.postText}</div>
                </div>
                <Comments />
            </div>
        );
    }
}

function DeletePost(props) {
    let navigate = useNavigate();
    const postRef = doc(db, "posts", props.props.postId);
    const postDelete = async () => {
        await deleteDoc(postRef);
        navigate(0); // This refreshes the page but there are issues:
        /*
            When it refreshes the page, it automatically logs the user out.
            The comment deleting itself works, but because it logs the user out upon refreshing,
            they won't be able to see the update until after they log in.
            In other words, we need to make it so that upon refreshing, users will not get logged out
            of their session.
        */
    }
    return (
        <button onClick={postDelete}>Delete Post</button>
    )
}

export default IndividualPost;