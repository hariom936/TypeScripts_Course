import React from 'react'
import './App.css';
import SearchInputs from './components/SearchInputs';


class App extends React.Component{
  onSearchSubmit =(entry) =>{
    console.log(entry)
  }
  render(){
    return (
      <>
        <h3 className='heading'>Search-Image-List</h3>
        <div className='ui container' style={{ marginTop: "30px" }}>
          <SearchInputs onSearchSubmit={this.onSearchSubmit} />
        </div>
      </>
    );
  }
}

export default App;
