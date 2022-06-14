import React from "react";
import Login from "./components/Login"
import Header from "./components/Header"
import CreatePost from "./components/CreatePost"

function App() {
  const [user, setUser] = React.useState('Reed');
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please login"
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />

  }
  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} setPost={setPosts} posts={posts} />
      {posts.map((post, i) => (
      <React.Fragment key={i}>
        {post.image && (
          <img
            style={{ height: 100, width: 200, objectFit: 'cover' }}
            src={URL.createObjectURL(post.image)}
            alt="Post Cover"
          />

        )}
        <p>{post.content}</p>
        <div>{user}</div>
      </React.Fragment>
      ))}
    </>
  );
}

export default App;