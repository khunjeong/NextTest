import { useQuery } from '@tanstack/react-query';
import { getVideoList } from '../../services';

export const useQueryGetVidioList = () => {
    return useQuery(['videoList'], () => getVideoList(), {
        cacheTime: 5 * 60 * 1000, // 5 minutes
    });
};
