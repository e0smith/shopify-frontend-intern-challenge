import '../../styling/Info.css'
import { LinkedinIcon, GithubIcon } from 'react-share';
import { LinkedinShareButton, GithubShareButton } from 'react-share'
import { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Info extends Component {
    render(){
        return(
            <div className="info">
                <h1> Information </h1>
                <p> Welcome to my Shopify 2022 front-end internship challenge project </p>
                <h2> Project Information </h2>
                <p> Photos and information have been taken from NASA and their "Mars Rover Photos" API </p>
                <p> Powered by JavaScript and React + Redux Libraries</p>
                <p> Hosted by GitHub</p>
                <h2> Myself </h2>
                <p> I am recent graduate of the Flatiron Schools Full-Stack Software Engineering Bootcamp</p>
                <p> Technologies include: Ruby, Rails, SQL, JavaScript, React, Redux, Git, CSS, HTML </p>
            </div>
        )
    }
}
