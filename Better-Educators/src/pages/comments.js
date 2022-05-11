import { React, useState, useEffect } from 'react';
import '../Individual.css';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore'
import { db, auth, firestore } from '../firebase/firebase';
import { useNavigate, useParams } from 'react-router-dom';

function Comments({ isAuth }) {
    const [comment, setComment] = useState([]);
    
    const commentsCollectionRef = collection(db, "comments");
    let navigate = useNavigate();

    const createComment = async () => {
        await addDoc(commentsCollectionRef, {
            comment, date: Date.now(), author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        });
    };

    return (
        <div id="comment-section">
            <div id="comment-form">
                <form method="post" id="comment-form">
                    <p className="form-label">Comments</p>
                    <textarea id="comment-text" name="comment-text" placeholder="Write something..." onChange={(event) => { setComment(event.target.value) }} required></textarea>
                    <button id="submit-button" name="submit-button" onClick={createComment}>Comment</button>
                </form>
            </div>
        </div>
    );
}

export default Comments;