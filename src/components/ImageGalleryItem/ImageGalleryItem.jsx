import PropTypes from 'prop-types';

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  onClickImage,
}) => {
  return (
    <GalleryItem onClick={() => onClickImage(largeImageURL)}>
      <GalleryImage src={webformatURL} alt="" />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};
