import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Avatar from '@mui/material/Avatar';
import React, { forwardRef } from 'react'
import "./Post.css"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import PublishIcon from '@mui/icons-material/Publish';

const Post = forwardRef(({ displayName, username, verified, timestamp, text, image, avatar }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}{" "}
                            <span className='post__headerSpecial'>
                                {verified && <VerifiedUserIcon className='post__badge'/>}
                                @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
})

export default Post