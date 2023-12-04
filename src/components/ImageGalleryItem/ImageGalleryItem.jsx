import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };

  toggleModal = () => {
    this.setState(({ shownModal }) => ({
      shownModal: !shownModal,
    }));
  };

  render() {
    const { imgURL, imgText, largeImageURL } = this.props;

    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.toggleModal}
          className="ImageGalleryItem-image"
          src={imgURL}
          alt={imgText}
        />
        {this.state.shownModal && (
          <Modal onClose={this.toggleModal} image={largeImageURL} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  imgURL: PropTypes.string.isRequired,
  imgText: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
