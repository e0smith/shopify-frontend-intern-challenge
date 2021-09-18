import React from 'react';
import { Component } from 'react';


class PhotoCard extends Component {

    render(){
        // const { img_src, earth_date } = photo
        console.log("photo: ", this.props.photo.photos)
        // console.log("image: ", img_src)
        return(
            <div class="card">
                {/* <img src={img_src} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h1>{earth_date}</h1>
                </div> */}
            </div>
        )
    }
}


export default PhotoCard;