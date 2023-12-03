import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = async (query, page = 1) => {
  return axios
    .get(
      `?q=${query}&page=${page}&key=40998593-91f1d6587e05dbd30e01e8a1b&image_type=photo&orientation=horizontal&per_page=12
  `
    )
    .then(({ data }) => ({
      newImages: data.hits,
      totalHits: data.totalHits,
    }));
};

export default { fetchImages };
