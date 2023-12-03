import { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import imagesApi from './services/images-api';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    images: [],
    filter: '',
    currentPage: 1,
    isLoadingMore: false,
    totalHits: 0,
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ isLoadingMore: true, currentPage: 1 });
    const { newImages, totalHits } = await imagesApi.fetchImages(
      this.state.filter
    );

    this.setState(({ currentPage }) => ({
      images: newImages,
      currentPage: currentPage + 1,
      isLoadingMore: false,
      isLoadMoreActive: false,
      totalHits: totalHits,
    }));
  };

  handleLoadMoreImages = async () => {
    this.setState({ isLoadingMore: true });

    const { newImages } = await imagesApi.fetchImages(
      this.state.filter,
      this.state.currentPage
    );

    this.setState(({ images, currentPage }) => ({
      images: [...images, ...newImages],
      currentPage: currentPage + 1,
      isLoadingMore: false,
    }));
  };

  handleChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { images, isLoadingMore, totalHits } = this.state;

    return (
      <div className="App">
        <SearchBar
          onSubmit={this.handleSubmit}
          onChange={this.handleChangeFilter}
        />
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoadingMore === true && <Loader visible={isLoadingMore} />}

        {images.length !== totalHits &&
          images.length > 0 &&
          isLoadingMore === false && (
            <Button onClick={this.handleLoadMoreImages}>Load More</Button>
          )}
        {/* <Modal img={images} /> */}
      </div>
    );
  }
}

export default App;
