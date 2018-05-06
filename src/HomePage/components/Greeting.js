import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.date_joined = moment(this.props.profile.date_joined).format('MMMM DD, YYYY')
  }

  render() {
    const {profile} = this.props;
    return (
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Hello, {profile.first_name} {profile.last_name}!</h1>
            <div className="row">
              <div className={'col-lg-3 col-md-12'}>Cool Memory Sharing App!</div>
              <div className={'col-lg-3 col-md-12 offset-md-6'}>Date Joined: {this.date_joined}</div>
            </div>
          </div>
        </div>
    )
  }
}

Greeting.propTypes = {
  profile: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    date_joined: PropTypes.string
  })
}

export {Greeting}

