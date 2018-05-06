/**
 * Created by andyxu on 2018-04-15.
 */

import React from 'react';
import PropType from 'prop-types';

const SingleInput = (props) => (
    <div className={'form-group' + (props.submitted && !props.value ? ' has-error' : '')}>
      <label htmlFor={props.name}>{props.title}</label>
      <input
          className="form-control"
          name={props.name}
          type={props.inputType}
          onChange={props.controlFunc}
          placeholder={props.placeholder}/>
      {props.submitted && !props.value &&
      <div className="help-block">{props.title} is required</div>
      }
    </div>
);

SingleInput.propTypes = {
  name: PropType.string.isRequired,
  inputType: PropType.string.isRequired,
  controlFunc: PropType.func.isRequired,
  placeholder: PropType.string,
  title: PropType.string
};

export default SingleInput;