import { React, useState, useEffect } from 'react';
import '../Individual.css';
import { doc, getDocs, collection, addDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Comments() {
    const [commentText, setCommentText] = useState([]);
    const [commentable, setCommentable] = useState(null);
    const [user, setUser] = useState({});

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

    let postId = useParams().postId;

    const commentsCollectionRef = collection(db, "posts", postId, "comments");

    const createComment = async () => {
        if (commentText === '') {
            setCommentable("Empty Fields!");
        } else {
            await addDoc(commentsCollectionRef, {
                commentText, date: Date.now(), author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
            });
        }
    }

    return (
        <div id="comment-section">
            <div id="comment-form">
                <form id="comment-form">
                    <p className="form-label">Comments</p>
                    {commentable &&
                        <div className="alert" variant='danger' dismissible onClose={() => setCommentable(null)}>{commentable}</div>
                    }
                    <textarea id="comment-text" name="comment-text" placeholder="Write something..." onChange={(event) => { setCommentText(event.target.value) }} required></textarea>
                    <button id="submit-button" name="submit-button" onClick={createComment}>Comment</button>
                </form>
            </div>

            <PastComments props={postId} user={user}/>
        </div>
    );
}

export default Comments;

function PastComments(props) {
    const [commentList, setCommentList] = useState([]);
    const commentsCollectionRef = collection(db, "posts", props.props, "comments");
    
    const [errorMessage, setErrorMessage] = useState(null);
    const user = props.user;

    useEffect(() => {
        const getComments = async () => {
            try {
                const data = await getDocs(commentsCollectionRef);
                const dataValues = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                let sorted = dataValues.sort((a, b) => {
                    return(b.date - a.date);
                });
                setCommentList(sorted);
            } catch (error) {
                setErrorMessage(error);
                console.log(error);
            }
        };

        getComments();
    }, []);

    return(commentList.map((comment) => {
        return (
            <div className='comment' key={comment.id}>
                <p className='comment-author'>{comment.author.name}</p>
                <p className='comment-text'>{comment.commentText}</p>
                <h5 className='comment-date'>{new Date(comment.date).toLocaleString()}</h5>
                {(user.uid === comment.author.id) &&
                <DeleteComment props={{ postId: props.props, commentId: comment.id}}/> }
            </div>
        )
    }));
}

function DeleteComment(props) {
    let navigate = useNavigate();
    const commentRef = doc(db, "posts", props.props.postId, "comments", props.props.commentId);
    const commentDelete = async () => {
        let text = "Are you sure you want to delete the comment?";
        if (window.confirm(text) == true) {
            text = "You pressed OK!";
            await deleteDoc(commentRef);
            navigate(0);
        } else {
            text = "You canceled!";
            navigate('/post/' + props.props.postId);
        }
    }
    return (
        <button className='delete-button' onClick={commentDelete}>Delete Comment</button>
    );
}