import '../../styling/Info.css'
import { Component } from 'react';



export default class Info extends Component {
    render(){
        return(
            <div className="info">
                <h1 id="i-h1"> Information </h1>

                <p id="i-p"> Welcome to my Shopify 2022 front-end internship challenge project </p>
                
                <h2 id="i-h2"> Project Information </h2>
                
                <p id="i-p"> Photos and information have been taken from NASA and their "Mars Rover Photos" API </p>
                
                <p id="i-p"> Powered by JavaScript and React + Redux Libraries</p>
                
                <p id="i-p"> Hosted by GitHub</p>
                
                <h2 id="i-h2"> Myself </h2>
                
                <p id="i-p"> I am recent graduate of the Flatiron Schools Full-Stack Software Engineering Bootcamp</p>
                
                <p id="i-p"> Technologies include: Ruby, Rails, SQL, JavaScript, React, Redux, Git, CSS, HTML </p>

                <p id="i-p"> You can find me on <a href="https://www.linkedin.com/in/edwardsmithsilvia/">Linkedin</a> and <a href="https://github.com/e0smith">GitHub</a></p>
            </div>
        )
    }
}
