import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <button
      onClick={props.clearOptions}
      disabled={!(props.options && props.options.length) > 0}
    >
      Remove all
    </button>
    <ol>
      {props.options &&
        props.options.map((item) => (
          <div key={item}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Option option={item} />
                  </td>
                  <td className="option">
                    <button onClick={() => props.removeOption(item)}>X</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </ol>
  </div>
);
export default Options;
