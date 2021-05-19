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
    return (
      <div>
        <form onSubmit={formOnSubmit}>
          <input type="text" name="option" className="addOption" />
          <button className="button" type="submit">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}
export default AddItem;
