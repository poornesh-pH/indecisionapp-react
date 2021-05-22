import React, { Component } from 'react';
import Modal from 'react-modal';

class OptionModal extends Component {
  componentDidMount() {
    Modal.setAppElement('body');
    //The whole problem is the scripts being loaded at the top of the page. react-modal was trying to set the app element to document.body, while it doesn't exist yet. If you did the same, within your code, it resulted as the same as your script was probably loaded before the DOM too.
  }
  render() {
    return (
      <Modal
        isOpen={!!this.props.do}
        contentLabel="Selected option"
        onRequestClose={this.props.closeModal}
        closeTimeoutMS={200}
      >
        <p style={{ color: 'green' }}>{this.props.do}</p>
        <button onClick={this.props.closeModal}>Close</button>
      </Modal>
    );
  }
}

export default OptionModal;
