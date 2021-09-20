import '../App.css';
import React from 'react';
import { Component } from 'react';

class PhotoCard extends Component {

    state = { 
        like: 0
    }

    handleChange(event){
        this.setState({like: event.target.value})
    }

    render() {
        console.log(this.props.photo)
        const { img_src, earth_date} = this.props.photo
        const { name: cameraName } = this.props.photo.camera
        const { name: roverName } = this.props.photo.rover
        return(
            <div id="c-body">
                <div id="card-container">
                    <div class="card">
                        <img src={img_src} alt="..."/>
                        
                        <span class="tag">NASA</span>

                        <span class="tag">Mars</span>

                        <div class="name">{roverName}</div>

                        <p>{cameraName}</p>

                        <p>{earth_date}</p>

                        <p> {this.state.like} Likes</p>

                        {<button onClick={() => this.setState({like: this.state.like + parseInt(this.props.likeInc)})}> Like </button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoCard;






// <div class="card">
// <img src={img_src} class="card-img-top" alt="..."/>
// <div class="card-body">
//     <h3 class="name">{roverName}</h3>
//     <p class="body-text">Captured on {earth_date}</p>
//     <p class="body-text">Camera: {cameraName}</p>
//     <p> {this.state.like} Likes</p>
//     {<button onClick={() => this.setState({like: this.state.like + parseInt(this.props.likeInc)})}> Like </button>}
// </div>
// </div>