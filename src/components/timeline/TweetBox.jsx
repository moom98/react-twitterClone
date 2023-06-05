import { Avatar, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import './tweetBox.css'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import db from '../../firebase'

function TweetBox () {
  const [tweetMessage, setTweetMessage]  = useState('');
  const [tweetImage, setTweetImage]  = useState('');

  const sendTweet = (e) => {
    // firestoreにデータを保存する
    e.preventDefault();

    addDoc(
      collection(db, 'posts'),{
        displayName: "twitter clone tutorial",
        userName: "ymkmy98",
        verified: true,
        text: tweetMessage,
        avatar: "https://source.unsplash.com/random/",
        image: tweetImage,
        timestamp: serverTimestamp(),
      });

      setTweetMessage("");
      setTweetImage("");
  }

  return (
    <div className='tweetBox'>
        <form action="">
            <div type="" className='tweetBox__input'>
                <Avatar />
                <input type="text" placeholder='いまどうしてる?' value={tweetMessage}
                onChange={(e) => setTweetMessage(e.target.value)} ></input>
            </div>
            <input type="text" className='tweetBox__imageInput' placeholder='画像のURLを入力してください'
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}></input>

            <Button className='tweetBox__tweetButton' type="submit" onClick={sendTweet}>ツイートする</Button>
        </form>
    </div>
  )
}

export default TweetBox;
