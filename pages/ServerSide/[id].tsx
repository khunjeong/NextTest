import { GetServerSideProps } from 'next';
import { VideoDetail } from '../../components';
import { getVideoList } from '../../services';

const PostPage = (props: any) => {
    return <VideoDetail video={props} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const { id } = query;
    const data = await getVideoList();

    if (data) {
        const selectVideo = data.items.find((video: any) => video.id === id);

        return {
            props: selectVideo,
        };
    }
    return {
        props: false,
    };
};

export default PostPage;
