import React, { useState, useEffect } from 'react'
import './timeline.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from "../../firebase"
import { collection, getDocs } from "firebase/firestore";


const Timeline = () => {

  const [posts, setPosts] = useState([

  ]);

  // ドキュメントIDを取得する
  const postData = collection(db, "posts")
  
  // マウント時に一度だけ実行
  useEffect(() => {
  getDocs(postData).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data())

      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    })
  });
  },[]);

  
  return (
    <div className="timeline">
      
    {/* header */}
    <div className="timeline__header">
      <h2>ホーム</h2>
    </div>

    {/* tweetBox */}
    <TweetBox />


    {/* post */}
    {posts.map((post) => (
      <Post 
      key= {post.text}
      displayName={post.displayName}
      userName={post.userName}
      verified={post.verified}
      text={post.text}
      avatar={post.avatar}
      image={post.image}
      />
    ))}
    </div>
  )
}

export default Timeline