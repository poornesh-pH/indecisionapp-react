import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <div className="widget-header">
      <p className="widget-title">Your Items</p>
      <button
        className="button button--link"
        onClick={props.clearOptions}
        disabled={!(props.options && props.options.length) > 0}
      >
        Remove all
      </button>
    </div>

    {props.options.length > 0 ? (
      <div className="options">
        {props.options &&
          props.options.map(item => (
            <div key={item} className="options__option">
              <Option option={item}/>
              <button
                className="button button--link"
                onClick={() => props.removeOption(item)}
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    ) : (
      <p className="widget__message">Add Items to get started</p>
    )}
  </div>
);
export default Options;
