import { React, useState, useEffect } from 'react';
import '../Individual.css';
import { doc, getDoc, collection } from 'firebase/firestore'
import { db, auth, firestore } from '../firebase/firebase';
import { useNavigate, useParams } from 'react-router-dom';


function IndividualPost({ isAuth }) {
    const [post, getPostInfo] = useState([]);
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
            getPostInfo(info);
        }
        getPost();
    }, []);


    return (
        <div className="individualPage">
            <div className="ipContainer">
                <h1>Individual Post Title</h1>
            </div>
        </div>
    );
    // const postSnap = await getDoc(postRef);

    // if (postSnap.exists()) {
    //     console.log(postSnap.data());
    // } else {
    //     console.log("None");
    // }
}
export default IndividualPost;