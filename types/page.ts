import IVideoItem from './video';

export default interface IPageProps {
    kind: string;
    etag: string;
    items: IVideoItem[];
    nextPageToken: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
}