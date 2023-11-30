import { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import imagesApi from './services/images-api';

class App extends Component {
  state = {
    images: [],
    filter: '',
  };

  handleSubmit = async e => {
    e.preventDefault();

    const images = await imagesApi.fetchImages(this.state.filter);

    this.setState({
      images,
    });
  };

  handleChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <SearchBar
          onSubmit={this.handleSubmit}
          onChange={this.handleChangeFilter}
        />
        {images.length > 0 && <ImageGallery images={images} />}
      </>
    );
  }
}

export default App;
