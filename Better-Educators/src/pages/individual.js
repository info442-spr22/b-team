import { React, useState, useEffect } from 'react';
import '../Individual.css';
import { doc, getDoc, collection } from 'firebase/firestore'
import { db, auth, firestore } from '../firebase/firebase';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from './comments';


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
export default IndividualPost;