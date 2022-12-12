import React from 'react'
import "./Widgets.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className='widgets__searchIcon' />
                <input type="text" placeholder='Search Twitter...' />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Happening...</h2>
                <TwitterTweetEmbed
                    tweetId={'933354946111705097'}
                />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={'https://facebook.com/saurabhnemade'}
                    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
                />
            </div>
        </div>
    )
}

export default Widgets