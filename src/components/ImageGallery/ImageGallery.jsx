import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ pageURL, webformatURL, tags }) => (
        <ImageGalleryItem key={pageURL} imgURL={webformatURL} imgText={tags} />
      ))}
    </ul>
  );
};

export default ImageGallery;
