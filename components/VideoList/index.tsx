import React from 'react';
import VideoItem from '../VideoItem';
import styles from './videoList.module.css';

const VideoList = ({ videos, onVideoClick, display }: any) => (
    <ul className={styles.videos}>
        {videos.map((video: any) => (
            <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display} />
        ))}
    </ul>
);

export default VideoList;
