import React from 'react';
import LookupWrapper from '../high_order/lookup_wrapper.jsx';

const LookupSelect = React.createClass({
  displayName: 'LookupSelect',

  propTypes: {
    placeholder: React.PropTypes.string,
    models: React.PropTypes.array
  },
  getValue() {
    return this.refs.entry.value;
  },
  clear() {
    return this.refs.entry.value = 'placeholder';
  },
  render() {
    let placeholder = `Select a ${this.props.placeholder}` || 'Select one';
    let options = this.props.models.map((model) => {
      return <option value={model} key={model}>{model}</option>;
    });

    return (
      <select name={this.props.placeholder.toLowerCase()} ref="entry" defaultValue="placeholder">
        <option
          value="placeholder"
          key="placeholder"
          disabled={true}
        >
          {placeholder}
        </option>
        {options}
      </select>
    );
  }
}
);

export default LookupWrapper(LookupSelect);
