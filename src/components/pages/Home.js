import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoCard from '../Card/Card'

class Home extends Component {
    state = {
        like: 1
    }

    handleChange = (event) => {
        this.setState({like: event.target.value})
    }
    
    render(){
        return(
            <div className="cards">
                {this.props.photos.map(nasa => nasa.photos.map(data => <PhotoCard photo={data} likeInc={this.state.like}/>))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
      photos: state.photos
    }
}

export default connect(mapStateToProps)(Home);