import React from 'react';
import { getFunName } from "../helpers";
class StorePicker extends React.Component{
  myInput = React.createRef();


  render(){
    return(
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Test</h2>

          <input type="text"
            ref = {this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}/>
          <button type="submit">submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker;
