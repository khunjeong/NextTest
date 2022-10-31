import React, { useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import { VideoList } from '../../components';
import { getVideoList } from '../../services';
import { IPageProps } from '../../types';


const Home: NextPage<IPageProps> = (props) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const router = useRouter();

    const selectVideo = (video: any) => {
        setSelectedVideo(video);
        router.push(`/ServerSide/${video.id}`);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>SSR페이지</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <VideoList
                videos={props.items}
                onVideoClick={selectVideo}
                display={selectedVideo ? 'list' : 'grid'}
            />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await getVideoList();

    return { props: data };
};

export default Home;
