import React from "react";
import Post from "./Post"

function PostList ({ posts, user, setPosts }) {


    return     posts.map((post, i) => (<Post user={user} key={post.id} posts={posts} setPosts={setPosts} {...post}/>));
    }

export default PostList;