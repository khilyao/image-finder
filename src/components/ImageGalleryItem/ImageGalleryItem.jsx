const ImageGalleryItem = ({ imgUrl, imgText }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={imgUrl} alt={imgText} />
    </li>
  );
};

export default ImageGalleryItem;
