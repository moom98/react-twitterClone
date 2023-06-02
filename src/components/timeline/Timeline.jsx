import React from 'react'
import './timeline.css'
import TweetBox from './TweetBox'
import Post from './Post'

const Timeline = () => {
  return (
    <div className="timeline">
      
    {/* header */}
    <div className="timeline__header">
      <h2>ホーム</h2>
    </div>

    {/* tweetBox */}
    <TweetBox />


    {/* post */}
    <Post />
    <Post />
    <Post />
    <Post />
    </div>
  )
}

export default Timeline