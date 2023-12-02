const ImageGalleryItem = ({ imgURL, imgText }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={imgURL} alt={imgText} />
    </li>
  );
};

export default ImageGalleryItem;
