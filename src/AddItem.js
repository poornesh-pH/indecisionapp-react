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
        <form className="add-option" onSubmit={formOnSubmit}>
          <input type="text" name="option" className="add-option__input" />
          <button className="button" type="submit">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}
export default AddItem;
