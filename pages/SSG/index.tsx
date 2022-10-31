import React, { useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { VideoList } from '../../components';
import { getVideoList } from '../../services';
import { IPageProps } from '../../types';


const Home: NextPage<IPageProps> = (props) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = (video: any) => {
        setSelectedVideo(video);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>SSG페이지</title>
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

export const getStaticProps: GetStaticProps = async (context) => {
    const data = await getVideoList();

    return { props: data };
};

export default Home;
