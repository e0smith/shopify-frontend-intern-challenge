import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/nasa'
import PhotoCard from './components/Card';


class App extends Component {
  componentDidMount(){
    this.props.getData()
  }
    state = {
      like: 1
    }

  handleChange = (event) => {
    this.setState({like: event.target.value})
  }

  render(){
    return(
      <div>
      <div className="cards">
        {this.props.photos.map(nasa => nasa.photos.map(data => <PhotoCard photo={data} likeInc={this.state.like}/>))}
      </div>
      </div>
       )
  }
}
const mapStateToProps = (state) => {
  return{
    photos: state.photos,
    loading: state.loading
  }
}
export default connect(mapStateToProps, { getData })(App);
