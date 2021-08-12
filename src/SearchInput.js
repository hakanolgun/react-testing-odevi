import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func,
  };

  handleChange = (event) => {
    this.props.textChange(event);
  };

  // handlePaste = (e) => {
  //   const myNewValue = e.clipboardData.getData('text') ? e.clipboardData.getData('text') : "mike";
  //   this._reactInternalFiber.child.child.child.stateNode.setAttribute("love", myNewValue);
  //   console.log(this._reactInternalFiber.child.child.child.stateNode);
  //   console.log(e.clipboardData.getData('text'));
  // }

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input
            data-testid="cp"
            onChange={this.handleChange}
            // onPaste={this.handlePaste}
          />
        </div>
      </div>
    );
  }
}
