import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import  "./App.scss"

function App() {
  const [user, setUser] = React.useState('');
  const [posts, setPosts] = React.useState([]);



  React.useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts'));
    if (posts) {
     setPosts(posts);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  React.useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts'));
    if (posts) {
     setPosts(posts);
    }
  }, []);


  React.useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please login"
  }, [user]);

  function handleAddPost (newPost) {
    setPosts([newPost, ...posts])
  }

  if (!user) {
    return <Login setUser={setUser} />

  }
  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} posts={posts} setPosts={setPosts}/>
      <PostList setPosts={setPosts} posts={posts} user={user}/>
    </>
  );
}

export default App;