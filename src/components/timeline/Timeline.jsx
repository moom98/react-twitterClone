import React, { useState, useEffect } from 'react'
import './timeline.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from "../../firebase"
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import FlipMove from 'react-flip-move'


const Timeline = () => {

  const [posts, setPosts] = useState([]);

  // ドキュメントIDを取得する
  const postData = collection(db, "posts");

  // tweetをタイムスタンプ順に並び替える
  const q = query(postData, orderBy("timestamp", "desc"));

  // マウント時に一度だけ実行
  useEffect(() => {
  // getDocs(q).then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     // console.log(doc.id, " => ", doc.data())
  //     setPosts(querySnapshot.docs.map((doc) => doc.data()));
  //   });
  // });

  // リアルタイムでデータを取得する
  onSnapshot(q, (snapshot) => {
    setPosts(snapshot.docs.map((doc) => doc.data()));
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
    <FlipMove>
    {posts.map((post) => (
      <Post
      key= {post.text}
      displayName={post.displayName}
      userName={post.userName}
      verified={post.verified}
      text={post.text}
      avatar={post.avatar}
      image={post.image}
      // timestamp={post.timestamp}
      />
    ))}
    </FlipMove>
    </div>
  )
}

export default Timeline