import React from 'react';

class AddFishForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (e) =>{
    //1. stop form from submitting
    e.preventDefault();
    console.log("Make a fish")
    console.log(this.nameRef.value.value)
  }




  render () {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
        <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc"/>
        <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm
