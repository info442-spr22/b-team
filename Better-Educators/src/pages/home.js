import { React, useState, useEffect } from 'react';
import '../Home.css';
import logo from '../logo.png';
import { db } from '../firebase/firebase';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { Container } from '../components/container';

function Home({ isAuth }) {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");
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


    const triggerText = 'Report Post';
    const onSubmit = (event) => {
        event.preventDefault(event);
        // console.log(event.target.name.value)
        // console.log(event.target.email.value)
        // console.log(event.target.school.value)
        // console.log(event.target.resource.value)
        // console.log(event.target.description.value)

        
    };




    return (
        <div className='homePage'>
            <header>
                <img src={logo} className="App-logo" alt="logo">
                </img>
                <p> Committed to making sure no student gets left behind </p>
                <p className='page-description'>Log into your educator google account to access a community-based forum to connect educators with other educators. The Better Educators forum is a resource in Washington State to help each other find technology equipment and resources for your students or your classroom. Log in to get started!</p>
            </header>
            {isAuth && postLists.map((post) => {
                return <div className='post' key={post.id} id={post.id}>
                    <div className='postHeader'>
                        <div className='title'>
                            <h1>{post.title}</h1>
                        </div>
                    </div>
                    <div className='postTextContainer'>{post.postText}</div>
                    <h4><pre>@ {post.author.name}   {new Date(post.date).toLocaleString()}</pre></h4>
                    <h4><pre className='locationPre'>{post.location}</pre></h4>
                    <button id='weird-button'><Link to={"/post/" + post.id}>More Info</Link></button>
                    <Container triggerText={triggerText} onSubmit={onSubmit}/>
                </div>
            })}
        </div>
    );
}
export default Home;