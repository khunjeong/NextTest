import { axios } from '../utils';

export const getVideoList = async () => {
    const data = await axios.get(
        'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0',
    );

    return data.data;
};
