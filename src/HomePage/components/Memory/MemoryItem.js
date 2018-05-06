import React from 'react';
import PropTypes from 'prop-types';
import './memory.css'

import ImageZoom from 'react-medium-image-zoom';

class MemoryItem extends React.Component {

  renderAction() {
    const profile = JSON.parse(localStorage.getItem('profile'));
    const memory_user = this.props.user;

    if (profile.username === memory_user) {
      return (
          <i id={this.props.id} className={'fas fa-times-circle close'} onClick={this.props.deleteFunc}/>
      )
    }
  }

  render() {

    const getCachedUrl = (url) => {
      return url.replace('/upload/', '/upload/f_auto/') // Set quality optimization
    };

    return (
        <div className={'img-wrap card'}>
          <ImageZoom
              image={{
                src: getCachedUrl(this.props.image_url),
                className: 'image',
                style: {width: '150em'}
              }}
              zoomImage={{
                src: getCachedUrl(this.props.image_url),
              }}
          />
          {this.renderAction()}
          <p>Location: {this.props.location}<br/>By: {this.props.user}</p>
        </div>
    )
  }
}

MemoryItem.propTypes = {
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
  image_url: PropTypes.string.isRequired,
  deleteFunc: PropTypes.func.isRequired

};

export {MemoryItem}

