import React from 'react'
import './post.css'
import { Avatar } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material'


function Post() {
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>プログラミングチュートリアル
                    <span className="post__headerSpecial">
                        <VerifiedUser className="post__badge" />
                        @ymkmy98
                    </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>twitterクローン</p>
                </div>
            </div>
            <img src="https://source.unsplash.com/random/" alt="" />
            <div className="post__footer">
                <ChatBubbleOutline fontSize="small" />
                <Repeat fontSize="small" />
                <FavoriteBorder fontSize="small" />
                <PublishOutlined fontSize="small" />
            </div>
        </div>
    </div>
  )
}

export default Post