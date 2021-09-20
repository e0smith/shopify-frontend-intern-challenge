import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoCard from '../card/Card'

class Home extends Component {
    render(){
        return(
            <div className="cards">
                {this.props.photos.map(nasa => nasa.photos.map(data => <PhotoCard photo={data} />))}
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