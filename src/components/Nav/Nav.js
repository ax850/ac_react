import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import {NavItem} from "./NavItem";

class Nav extends React.Component {

  renderNavItems() {
    return _.map(this.props.navItems, (item, index) => <NavItem key={index} {...item}/>)
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">PicFlic</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {this.renderNavItems()}
            </ul>
          </div>
        </nav>
    )
  }
}

Nav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export {Nav}