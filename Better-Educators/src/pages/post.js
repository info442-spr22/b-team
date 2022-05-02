import React from 'react';
import '../Post.css'


const Post = () => {

    return(
        <div>
            <h1>Post</h1>
            <Comments />
        </div>
    );
}
export default Post;

function Comments() {
    return (
        <div id="comment-section">
            <div id="comment-form">
                <form method="post" id="comment-form">
                    <p class="form-label">Comments</p>
                    <textarea id="comment-text" name="comment-text" placeholder="Write something..."></textarea>
                    <button type="submit" id="submit-button" name="submit-button">Comment</button>
                </form>
            </div>
        </div>
    );
}