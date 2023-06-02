import React from 'react'
import './widget.css'
import { Search } from '@mui/icons-material'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

function Widget() {
  return (
    <div className='widgets'>
        <div className="widgets__input">
            <Search className='widgets__searchIcon' />
            <input type="text" placeholder='キーワード検索'/>
        </div>

        <div className="widgets__container">
            <h2>いまどうしてる？</h2>

            <TwitterTweetEmbed tweetId={"1656433990268604420"} />
            <TwitterTimelineEmbed sourceType="profile" screenName="TwitterDev" options={{height: 400}}/>
            <TwitterShareButton
                url={'https://twitter.com/googlejapan'}
                options={{ text: '#reactjs is awesome', via: '_tama_koshi_' }}
            />
        </div>
    </div>
  )
}

export default Widget