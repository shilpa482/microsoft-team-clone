import React, { useState, useEffect } from "react";
import "./Sidebar.css";

//icons from material ui

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import SidebarOption from "../SidebarOption/SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

//import of db
import db from "../firebase";


function Sidebar() {
  const [channels, setChannels] = useState([]);
  

  useEffect(() => {
    //run onload
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  // console.log(channels);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h3>
            <FiberManualRecordIcon />
            <h2>You are Online</h2>
          </h3>
        </div>
        
      </div> 
      
      <a href="#home"><SidebarOption Icon={InsertCommentIcon}/>Chats</a>
      
      <a href="#home"><SidebarOption Icon={DraftsIcon}/>Mentions & reactions </a>
      
      <a href="#home"><SidebarOption Icon={BookmarkBorderIcon}/>Saved items </a>
      
      <a href="#home"><SidebarOption Icon={PeopleAltIcon}/>Teams video call</a>
      
      <a href="#home"><SidebarOption Icon={AppsIcon}/>Apps </a>
      
      <a href="#home"><SidebarOption Icon={FileCopyIcon}/>File browser</a>
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
    
      <SidebarOption Icon={ExpandMoreIcon} title="Hang Up" />

      <hr />
      <SidebarOption Icon={AddIcon} addChannelOptions title="Add New Room" />
      {channels.map((channel) => (
        <SidebarOption key={channel.id} title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}
export default Sidebar;
