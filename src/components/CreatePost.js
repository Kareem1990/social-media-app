import React from "react";
import "./CreatePost.scss"

function CreatePost ({ user, handleAddPost, posts, setPosts }) {

    const [content, setContent] = React.useState("");
    const [image, setImage] = React.useState(null);
    const imageInputRef= React.useRef();
    


    function handleSubmit(event) {
        event.preventDefault();
        const post = { content, image, user };
        handleAddPost(post);
        setContent("");
        imageInputRef.current.value= '';
        // const newPosts = [post, ...posts ];
        // setPosts(newPosts);

    }

    return <div>
        <h1>Create New Post</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Post Content"
                onChange={event => setContent(event.target.value)}
                value={content}
            />
            <input
                type="file"
                onChange={event => setImage(event.target.files[0])}
                ref={imageInputRef}
            />
            <button type="submit">Submit post</button>
        </form>
        {/* <p>{content}</p>
        {image && <img
            style={{ height: 100, width: 200, objectFit: 'cover' }}
            src={URL.createObjectURL(image)}
        />} */}


    </div>
    
   
}


export default CreatePost;