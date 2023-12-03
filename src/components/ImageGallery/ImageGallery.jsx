import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ pageURL, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={pageURL}
          imgURL={webformatURL}
          imgText={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
