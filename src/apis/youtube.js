import axios from 'axios';

const KEY = 'AIzaSyBZwKOk9M4NGpwEottXaWWdrOYGN4rFyUE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
