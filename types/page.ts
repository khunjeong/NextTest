import { IVideoItem } from './video';

export interface IPageProps {
    kind: string;
    etag: string;
    items: IVideoItem[];
    nextPageToken: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
}
