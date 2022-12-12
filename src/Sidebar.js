import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import MailOutline from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twitterIcon'/>
        <SidebarOption active Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={TagIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsNone} text="Notifications"/>
        <SidebarOption Icon={MailOutline} text="Messages"/>
        <SidebarOption Icon={BookmarkBorder} text="Bookmarks"/>
        <SidebarOption Icon={ListAltIcon} text="Lists"/>
        <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
        <SidebarOption Icon={MoreHorizIcon} text="More"/>
        <Button variant='outlined' className='sidebar__tweetButton' fullWidth>TWEET</Button>
    </div>
  )
}

export default Sidebar