import React from "react";
import "./Post.scss"

function Post ({ image, content, user, id, posts, setPosts }) {

 
const isCurrentUser = user === user;

// // const deleteItem= () => {
// //   setPosts(posts =>
// //     posts.filter(posts => {
// //       return posts !== id;
// //     }),
// //   );
// };
    return <>
      {image && (
        <img
          // style={{ height: 100, width: 200, objectFit: 'cover' }}
          src={URL.createObjectURL(image)}
          alt="Post Cover"
        />

      )}
      <p>{content}</p>
      <div>{user}</div>
      {isCurrentUser && <button>Delete </button>}
    </>
}

export default Post;