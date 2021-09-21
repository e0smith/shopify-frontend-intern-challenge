import '../styling/App.css';
import React, { Component } from 'react';
import Heart from 'react-animated-heart';
import {
    FacebookIcon,
    LinkedinIcon,
    RedditIcon,
    TwitterIcon,
    TelegramIcon
} from 'react-share';
import {
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton,
    TelegramShareButton
} from 'react-share';

export default class PhotoCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            likes: Math.floor(Math.random() * (10000 - 1 + 1) + 1),
            isClick: false,
            updated: false
        }
    }

    updateLikes = () => {
        if(!this.state.isClick) {
          this.setState((prevState) => {
            return {
              likes: prevState.likes + 1,
              isClick: true
            };
          });
        } else {
          this.setState((prevState) => {
            return {
              likes: prevState.likes - 1,
              isClick: false
            };
          });
        }
    }

    render() {
        const { img_src, earth_date } = this.props.photo
        const { name: cameraName } = this.props.photo.camera
        const { name: roverName, landing_date, launch_date } = this.props.photo.rover
        return(
            <div id="c-body">
                <div id="card-container">
                    <div class="card">
                        
                        <div class="name">{roverName}</div>

                        <p>{earth_date}</p>

                        <img src={img_src} id="c-img" alt="..."/>
                        
                        <span class="tag">NASA</span>

                        <span class="tag">Mars</span>

                        <p>Camera: {cameraName}</p>

                        <p>Launched on {launch_date}</p>

                        <p>Landed on {landing_date}</p>

                        <p> {this.state.likes} Likes</p>
                        
                        <p><Heart isClick={this.state.isClick} onClick={() => this.setState({isClick: !this.state.isClick}), this.updateLikes}/> </p>
                       
                        <share>
                            <FacebookShareButton id="share" url={img_src}>
                                <FacebookIcon id="share" size={35} round={true}/>
                            </FacebookShareButton>

                            <LinkedinShareButton id="share" url={img_src}>
                                <LinkedinIcon id="share" size={35} round={true} />
                            </LinkedinShareButton>

                            <RedditShareButton id="share" url={img_src}>
                                <RedditIcon id="share" size={35} round={true} />
                            </RedditShareButton>

                            <TwitterShareButton id="share" url={img_src}>
                                <TwitterIcon id="share" size={35} round={true} />
                            </TwitterShareButton>

                            <TelegramShareButton id="share" url={img_src}>
                                <TelegramIcon id="share" size={35} round={true} />
                            </TelegramShareButton>
                        </share>
                    </div>
                </div>
            </div>
        )
    }
}
