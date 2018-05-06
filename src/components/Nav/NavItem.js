import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class NavItem extends React.Component {
  render() {
    return (
        <li className="nav-item">
          <Link className="nav-link" to={this.props.url}>{this.props.name}<span
              className="sr-only">(current)</span></Link>
        </li>
    )
  }
}

NavItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string
};

export {NavItem}