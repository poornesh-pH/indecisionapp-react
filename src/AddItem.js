import React, { Component } from 'react';

class AddItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const formOnSubmit = e => {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      this.props.addOption(option);
      e.target.elements.option.value = '';
    };
    const errorStyle = {
      color: 'red'
    };
    return (
      <div>
        <form onSubmit={formOnSubmit}>
          <input type="text" name="option" />
          <button className="button" type="submit">
            Add Item
          </button>
        </form>
        <p style={errorStyle}>{this.props.error}</p>
      </div>
    );
  }
}
export default AddItem;
