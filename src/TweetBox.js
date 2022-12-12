import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react'
import "./TweetBox.css"
import firebase from 'firebase/compat/app'; 
import db from './firebase';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName:'Vivek Kumar Prajapati',
            username:'vkp123!@#',
            avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAW0JgEfhYZvOXNa5z28fTYkF5lED7nJ2pQ&usqp=CAU",
            image:tweetImage,
            text:tweetMessage,
            verified:true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setTweetMessage('')
        setTweetImage('')
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar alt="Travis Howard" src="https://cdn.statusqueen.com/dpimages/thumbnail/Boy_Stylish__Dp_Image-2277.jpg" />
                    <input
                        value={tweetMessage}
                        onChange={e=>setTweetMessage(e.target.value)}
                        type="text"
                        placeholder="What's Happening?..."
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={e=>setTweetImage(e.target.value)}
                    className='tweetBox__inputImage'
                    type="text"
                    placeholder='Optional : Enter Image URL'
                />
                <Button onClick={sendTweet} type="submit" className='tweetBox__button'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox