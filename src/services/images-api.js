import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = query => {
  return axios
    .get(
      `?q=${query}&page=1&key=40998593-91f1d6587e05dbd30e01e8a1b&image_type=photo&orientation=horizontal&per_page=6
  `
    )
    .then(({ data }) => data.hits);
};

export default { fetchImages };
