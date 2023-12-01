import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} imgUrl={webformatURL} imgText={tags} />
      ))}
    </ul>
  );
};

export default ImageGallery;
