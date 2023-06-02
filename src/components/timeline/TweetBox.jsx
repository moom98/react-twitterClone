import { Avatar, Button } from '@mui/material'
import React from 'react'
import './tweetBox.css'

function TweetBox () {
  return (
    <div className='tweetBox'>
        <form action="">
            <div type="" className='tweetBox__input'>
                <Avatar />
                <input type="" placeholder='いまどうしてる?'></input>
            </div>
            <input type="text" className='tweetBox__imageInput' placeholder='画像のURLを入力してください'></input>
            <Button className='tweetBox__tweetButton' type="submit">ツイートする</Button>
        </form>
    </div>
  )
}

export default TweetBox;
