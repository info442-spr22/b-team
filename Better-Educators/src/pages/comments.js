import { React, useState, useEffect } from 'react';
import '../Individual.css';
import { doc, getDocs, collection, addDoc } from 'firebase/firestore'
import { db, auth, firestore } from '../firebase/firebase';
import { useNavigate, useParams } from 'react-router-dom';

function Comments({ isAuth }) {
    const [commentText, setCommentText] = useState([]);
    let postId = useParams().postId;

    const commentsCollectionRef = collection(db, "posts", postId, "comments");
    let navigate = useNavigate();

    const createComment = async () => {
        await addDoc(commentsCollectionRef, {
            commentText, date: Date.now(), author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        });
        navigate('/post/' + postId);
    };

    return (
        <div id="comment-section">
            <div id="comment-form">
                <form method="post" id="comment-form">
                    <p className="form-label">Comments</p>
                    <textarea id="comment-text" name="comment-text" placeholder="Write something..." onChange={(event) => { setCommentText(event.target.value) }} required></textarea>
                    <button id="submit-button" name="submit-button" onClick={createComment}>Comment</button>
                </form>
            </div>

            <PastComments props={postId}/>
        </div>
    );
}

export default Comments;

function PastComments(props) {
    const [commentList, setCommentList] = useState([]);
    const commentsCollectionRef = collection(db, "posts", props.props, "comments");
    useEffect(() => {
        const getComments = async () => {
            const data = await getDocs(commentsCollectionRef);
            const dataValues = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            let sorted = dataValues.sort((a, b) => {
                return(b.date - a.date);
            });
            setCommentList(sorted);
        };

        getComments();
    }, []);

    return(commentList.map((comment) => {
        return (
            <div className='comment' key={comment.id}>
                <p className='comment-author'>{comment.author.name}</p>
                <p className='comment-text'>{comment.commentText}</p>
                <h5 className='comment-date'>{new Date(comment.date).toLocaleString()}</h5>
            </div>
        )
    }));
}