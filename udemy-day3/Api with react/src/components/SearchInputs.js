import React from 'react';

class SearchInputs extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       inputValue: ''
//     }
//   }

//   handleInputChange(event) {
//     this.setState({
//       inputValue: event.target.value
//     })
//   }
state = {entry: ''}

onFormSubmit =(event) =>{
    event.preventDefault()
    this.props.onSearchSubmit(this.state.entry)
}

  render() {
    return (
      <>
        <div className='ui segment'>
          <form onSubmit={this.onFormSubmit} className='ui form'>
            <div className='field'>
              <div className='ui massive icon input'>
                <input
                  type='text'
                  placeholder='Search here...'
                  onChange={(event) => this.setState({entry:event.target.value})}
                  value={this.state.entry}
                />
                <i className='search icon'></i>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default SearchInputs;
