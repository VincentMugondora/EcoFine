// import React from 'react'
import { useParams } from "react-router-dom"

const Post = () => {
    const {postId} = useParams()
  return (
    <div className="w-[100%] h-[100vh] bg-pink-400 flex justify-center items-center">
      <h1>Blog Post {postId}</h1>
    </div>
  );
}

export default Post
