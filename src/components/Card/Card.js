import '../../styling/App.css';
import '../../styling/Like.css';
import React from 'react';
import { Component } from 'react';
import { FacebookIcon, LinkedinIcon, RedditIcon, TwitterIcon, TelegramIcon} from 'react-share';
import { FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, TelegramShareButton } from 'react-share'


export default class PhotoCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            likes: Math.floor(Math.random() * (10000 - 1 + 1) + 1),
            updated: false
        }
    }

    updateLikes = () => {
        if(!this.state.updated) {
          this.setState((prevState) => {
            return {
              likes: prevState.likes + 1,
              updated: true
            };
          });
        } else {
          this.setState((prevState) => {
            return {
              likes: prevState.likes - 1,
              updated: false
            };
          });
        }
    }

    render() {
        const { img_src, earth_date} = this.props.photo
        const { name: cameraName } = this.props.photo.camera
        const { name: roverName } = this.props.photo.rover
        return(
            <div id="c-body">
                <div id="card-container">
                    <div class="card">
                        <img src={img_src} id="c-img" alt="..."/>
                        
                        <span class="tag">NASA</span>

                        <span class="tag">Mars</span>

                        <div class="name">{roverName}</div>

                        <p>{cameraName}</p>

                        <p>{earth_date}</p>

                        <p> {this.state.likes} Likes</p>
                        <p>{this.likeButton()}</p>

                        <FacebookShareButton url={img_src}>
                            <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>

                        <LinkedinShareButton url={img_src}>
                            <LinkedinIcon size={32} round={true} />
                        </LinkedinShareButton>

                        <RedditShareButton url={img_src}>
                            <RedditIcon size={32} round={true} />
                        </RedditShareButton>

                        <TwitterShareButton url={img_src}>
                            <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>

                        <TelegramShareButton url={img_src}>
                            <TelegramIcon size={32} round={true} />
                        </TelegramShareButton>
                    </div>
                </div>
            </div>
        )
    }

    likeButton = () => {
        return(
            <div>
                <input type="checkbox" class="checkbox" id="checkbox" />
                <label for="checkbox">
                    <p onClick={this.updateLikes}>
                        <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                        <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2"/>
                        <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>
    
                        <g id="grp7" opacity="0" transform="translate(7 6)">
                            <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/>
                            <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/>
                        </g>
    
                        <g id="grp6" opacity="0" transform="translate(0 28)">
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/>
                            <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/>
                        </g>
    
                        <g id="grp3" opacity="0" transform="translate(52 28)">
                            <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/>
                            <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/>
                        </g>
    
                        <g id="grp2" opacity="0" transform="translate(44 6)">
                            <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"/>
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"/>
                        </g>
    
                        <g id="grp5" opacity="0" transform="translate(14 50)">
                            <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"/>
                            <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"/>
                        </g>
    
                        <g id="grp4" opacity="0" transform="translate(35 50)">
                            <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"/>
                            <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"/>
                        </g>
    
                        <g id="grp1" opacity="0" transform="translate(24)">
                            <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
                            <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
                        </g>
                        </g>
                    </svg>
                    </p>
                </label>
            </div>
        )
    }
}
