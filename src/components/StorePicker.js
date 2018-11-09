import React from 'react';
import { getFunName } from "../helpers";
class StorePicker extends React.Component{
  myInput = React.createRef();

  goToStore = (event) => {
    //1. Stop the form from submitting
    event.preventDefault();
    //2. get the text from that input
    console.log(this.myInput.value.value);
    //3. Change the page to /store/whatever-they-created
  }

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
