import { React, useState, useEffect } from 'react';
import '../Home.css'
import logo from '../logo.png'
import { db, auth } from '../firebase/firebase';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { useNavigate, Link } from 'react-router-dom';

function Home({ isAuth }) {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts")
    let navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            const dataValues = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            let sorted = dataValues.sort((a, b) => {
                return(b.date - a.date);
            });
            setPostList(sorted);
        };

        getPosts();
    }, []);
    return (
        <div className='homePage'>
            <header>
                <img src={logo} className="App-logo" alt="logo">
                </img>
                <p> Committed to making sure no student gets left behind </p>
            </header>
            {isAuth && postLists.map((post) => {
                return <div className='post' key={post.id} id={post.id}>
                    <div className='postHeader'>
                        <div className='title'>
                            <h1>{post.title}</h1>
                        </div>
                    </div>
                    <div className='postTextContainer'>{post.postText}</div>
                    <h4><pre>@ {post.author.name}   {new Date(post.date).toLocaleString()}   {post.location}</pre></h4>
                    <button><Link to={"/post/" + post.id}>More Info</Link></button>
                </div>
            })}
        </div>
    );
}
export default Home;