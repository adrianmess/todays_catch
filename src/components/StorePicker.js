import React from 'react';

class StorePicker extends React.Component{
  render(){
    return(
      <React.Fragment>
        <form className="store-selector">
          <h2>Test</h2>
          <input type="text" required placeholder="Store Name"></input>
          <button type="submit">submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker;
