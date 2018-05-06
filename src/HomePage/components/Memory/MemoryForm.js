import React from 'react'
import SingleInput from './../../../components/FormComponents/SingleInput'
import TextArea from './../../../components/FormComponents/TextArea';

export default class MemoryForm extends React.Component {
  render() {
    return (
        <form name={'form'} onSubmit={this.props.submitFunc} encType={"multipart/form-data"}>
          <SingleInput
              value={this.props.form.location}
              submitted={this.props.submitted}
              inputType={'text'}
              title={'Location'}
              name={'location'}
              controlFunc={this.props.controlFunc}
              placeholder={'Type Location here'}
          />

          <TextArea
              value={this.props.form.description}
              submitted={this.props.submitted}
              resize={'true'}
              name={'description'}
              title={'Description'}
              rows={5}
              controlFunc={this.props.controlFunc}
              content={this.props.form.description}
              placeholder={'Please be thorough in your descriptions'}
          />

          <SingleInput
              value={this.props.form.image}
              submitted={this.props.submitted}
              name={'image'}
              title={'Image'}
              inputType={'file'}
              controlFunc={this.props.controlFuncFile}
              place={'Upload Image'}
          />

          <div className="form-group">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>


    )
  }
}

