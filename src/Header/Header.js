import React  from "react";
import * as classes from "./Header.css";
import {
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";

//material-ui icons
import { Avatar } from "@material-ui/core";


//context state provider
import { useStateValue } from "../StateProvider";

function Header() {
  //const [user, setUser] = setState(null);
  const [{ user }] = useStateValue();
  
  return (
    <div className="header">
    <div className="header__search">
            <div class="container-fluid">
                <div class="row" >
                    
                        <h1 class="text-center">Github Integration</h1>
                        <p>Enter the username</p>
                        <input type="text" id="username" placeholder="GitHub username"></input>
                        <button id="btnUser" class="btn btn-primary">Search</button>
                         <div>
                            <p id="divResultPath"></p>
                        </div>
                        <div id="divResult">
                        </div>
                    
                </div>
            </div>
        </div>
        <script src="main.js"></script>
      <div className="header__left">
        <img
          src='https://jurby.sch.im/site/uploads/blog/16/image/1200px_Microsoft_Office_Teams_2018_present_svg.png'
          alt='Microsoft Teams'
        />
        <h3>Welcome To Microsoft Teams</h3>
        
        <WhatsappShareButton
             url={`https://google.com`}
              title={`Join this meeting with the given code (copy your peerid here)""\n`}
              separator="Link: "
              className={classes.share_icon}
            >
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>
            
            <FacebookShareButton
              url={`https://google.com`}
              title={`Join this meeting with the given code ""\n`}
              className={classes.share_icon}
            >
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://google.com`}
              title={`Join this meeting with the given code  \n`}
              className={classes.share_icon}
            >
              <TwitterIcon size={40} round className={classes.share_border} />
            </TwitterShareButton>
            
      </div>
      
      <div className="header__user">
     
            
          
        <Avatar
          alt={user.displayName}
          variant="circular"
          src={user.photo}
          >
        </Avatar>
        <h5>{ user.displayName}</h5>
        
      </div>
    </div>
  );
}
export default Header;
