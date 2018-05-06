import React from 'react'
import PropType from 'prop-types'

const TextArea = (props) => (
    <div className={'form-group' + (props.submitted && !props.value ? ' has-error' : '')}>
      <label htmlFor={props.name}>{props.title}</label>
      <textarea
          className="form-control"
          style={props.resize ? null : {resize: 'none'}}
          name={props.name}
          rows={props.rows}
          value={props.content}
          onChange={props.controlFunc}
          placeholder={props.placeholder}/>
      {props.submitted && !props.value &&
      <div className="help-block">{props.title} is required</div>
      }
    </div>
);

TextArea.propTypes = {
  name: PropType.string.isRequired,
  controlFunc: PropType.func.isRequired,
  placeholder: PropType.string,
  content: PropType.string,
  resize: PropType.string,
  title: PropType.string.isRequired
};

export default TextArea;