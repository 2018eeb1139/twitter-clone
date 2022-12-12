import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import db from "./firebase"
import FlipMove from 'react-flip-move'

const Feed = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    console.log(posts)
    return (
        <div className='feed'>
            <div className="feed__header">
                Home
            </div>
            <TweetBox />
            <FlipMove>
                {
                    posts.map((post) => (
                        <Post
                            key={post.text}
                            displayName={post.displayName}
                            username={post.username}
                            avatar={post.avatar}
                            text={post.text}
                            image={post.image}
                            verified={post.verified}
                        />
                    ))
                }
            </FlipMove>
        </div>
    )
}

export default Feed