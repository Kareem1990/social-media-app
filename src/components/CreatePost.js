import React from "react";

function CreatePost ({ user }) {

    const [content, setContent] = React.useState("");
    const [image, setImage] = React.useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        const Post = { content, image, user }
    }

    return <div>
        <h1>Create New Post</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Post Content"
                onChange={event => setContent(event.target.value)}
            />
            <input
                type="file"
                onChange={event => setImage(event.target.files[0])}
            />
            <button type="submit">Submit post</button>
        </form>
        <p>{content}</p>
        {image &&<img
            style={{ height: 100, width: 200, objectFit: 'cover' }}
            src={URL.createObjectURL(image)}
        />}
    </div>
    
   
}


export default CreatePost;