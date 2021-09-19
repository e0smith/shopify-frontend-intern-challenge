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
            <div class="card">
                <img src={img_src} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h3 class="card-title">Rover: {roverName}</h3>
                    <p class="card-text">Captured on {earth_date}</p>
                    <p class="card-text">Camera: {cameraName}</p>
                    <p> Likes: {this.state.like}</p>
                    {<button onClick={() => this.setState({like: this.state.like + parseInt(this.props.likeInc)})}> Like </button>}
                </div>
                </div>
    )
    }
}

export default PhotoCard;
