import React from 'react'
import './App.css';
import axios from 'axios';
import SearchInputs from './components/SearchInputs';
import Images from './components/ImageList' ;
  
class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (entry) => {
    const response = await axios.get(`https://pixabay.com/api/?key=37510538-01bd7815111a69d999f8f6097&q=${entry}&image_type=photo`)
    this.setState({ images: response.data.hits });
    // console.log(response.data.hits)

  }

  render() {
     // eslint-disable-next-line
    return (
      <>
        <h3 className='heading'>Image-List</h3>
        <div className='ui container' style={{ marginTop: "30px" }}>
          <SearchInputs onSearchSubmit={this.onSearchSubmit} />
          <Images />
        </div>
      </>
    );
  }
}

export default App;
