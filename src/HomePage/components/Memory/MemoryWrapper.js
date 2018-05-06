import React from 'react';
import {connect} from 'react-redux';
import {MemoryList} from "./MemoryList";
import {memoryActions} from "../../../actions/memory.actions";
import MemoryForm from './MemoryForm';

import './memory.css';

class MemoryWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        location: '',
        description: '',
        occurrence_date: '',
        image: ''
      },
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  componentDidMount() {
    this.props.dispatch(memoryActions.getMemory());
  }

  handleChange(event) {
    const {name, value} = event.target;
    const {form} = this.state;
    this.setState({
      form: {
        ...form,
        [name]: value
      }
    });
  }

  handleFileChange(event) {
    const image = event.target.files[0];
    const {form} = this.state;
    form.image = image;
    this.setState({
      form: {
        ...form,
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitted: true});

    const {form} = this.state;
    const {dispatch} = this.props;

    if (form.description && form.location && form.image) {
      dispatch(memoryActions.createMemory(form));
    }

  }

  handleDelete(event) {
    event.preventDefault();
    const memory_id = event.target.id;
    const {dispatch} = this.props;
    dispatch(memoryActions.deleteMemory(memory_id))
  }

  render() {
    let {memory} = this.props;
    let {status} = this.props;
    let {form, submitted} = this.state;

    const {alert} = this.props;
    const alertType = alert.status.success ? 'alert-success' : 'alert-danger';

    return (
        <div className="row">
          {memory && <div className={(status.creatingMemory ? 'Create col-lg-8 col-md-12' : 'col-lg-8 col-md-12')}>
            <h2>Memory ({memory.length})</h2>
            <MemoryList memory={memory} deleteFunc={this.handleDelete}/>
          </div>}
          <div id={'memory-form-wrapper'} className={'col-lg-4'}>
            <div className={'card bg-faded'} style={{'padding': '1em'}}>
              {alert.result.msg && alert.type === 'MEMORY' &&
              <div className={`alert ${alertType}`}>{alert.result.msg}</div>
              }
              <h4>Add New Memory</h4>
              <MemoryForm
                  form={form}
                  submitted={submitted}
                  submitFunc={this.handleSubmit}
                  controlFunc={this.handleChange}
                  deleteFunc={this.handleDelete}
                  controlFuncFile={this.handleFileChange}
              />
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  let {memory} = state.memory.result;
  let {status} = state.memory;
  let {alert} = state;
  return {
    memory,
    status,
    alert
  }
}

const connectedMemoryWrapper = connect(mapStateToProps)(MemoryWrapper);
export {connectedMemoryWrapper as MemoryWrapper}