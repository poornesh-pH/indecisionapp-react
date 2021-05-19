import React, { Component } from 'react';
import './style.css';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Option from './Option';
import AddItem from './AddItem';
import OptionModal from './OptionModal';
import './styles/styles.scss';

// const obj = {
//   name: 'poornesh',
//   getName(){
//     return this.name;
//   }
// }
// const getName =()=>obj.getName();
// const getName = obj.getName.bind(obj);
// console.log(getName());
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      error: null,
      do: null
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      if (json !== 'null') {
        const options = JSON.parse(json);
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing
    }
  }
  componentDidUpdate() {
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options', json);
  }
  render() {
    const title = 'IndecisionApp';
    const clearOptions = () => {
      this.setState(() => {
        return {
          options: [],
          error: null,
          do: null
        };
      });
    };
    const hasOptions = () => {
      console.log(this.state.options);
      if (this.state.options !== null) return true;
      else return false;
    };
    const handlePick = () => {
      const randomOption = this.state.options[
        Math.floor(Math.random() * this.state.options.length)
      ];
      this.setState(() => {
        return {
          do: randomOption
        };
      });
    };
    const addOption = option => {
      if (!option) {
        this.setState(() => {
          return {
            error: 'Enter some value'
          };
        });
      } else if (hasOptions() && this.state.options.includes(option)) {
        this.setState(() => {
          return {
            error: 'Item already exists'
          };
        });
      } else {
        this.setState(prevState => {
          return {
            options: prevState.options.concat(option),
            error: null
          };
        });
      }
    };
    const removeOption = option => {
      this.setState(() => {
        return {
          options: this.state.options.filter(opt => opt !== option)
        };
      });
    };
    const closeModal = () => {
      this.setState(() => {
        return { do: null };
      });
    };
    return (
      <div>
        <Header title={title} />
        <div className="container">
          <Action
            hasOptions={hasOptions() && this.state.options.length > 0}
            handlePick={handlePick}
            do={this.state.do}
          />
          <p className="error-message">{this.state.error}</p>
          <div className="widget">
            <Options
              options={this.state.options}
              clearOptions={clearOptions}
              removeOption={removeOption}
            />
            <Option />
            <AddItem addOption={addOption} />
          </div>
        </div>
        <OptionModal do={this.state.do} closeModal={closeModal} />
      </div>
    );
  }
}
