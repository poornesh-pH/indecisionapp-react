import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <h3>Your Items</h3>
    <button
      className="button button--link"
      onClick={props.clearOptions}
      disabled={!(props.options && props.options.length) > 0}
    >
      Remove all
    </button>
    {props.options.length > 0 ? (
      <ol>
        {props.options &&
          props.options.map(item => (
            <div key={item}>
              <Option option={item} />
              <button
                className="button button--link"
                onClick={() => props.removeOption(item)}
              >
                Remove
              </button>
            </div>
          ))}
      </ol>
    ) : (
      <p>Add Items to get started</p>
    )}
  </div>
);
export default Options;
