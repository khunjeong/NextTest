import React from 'react';

import Image from 'next/image';

import styles from './videoItem.module.css';

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }: any) => {
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
        <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
            <div className={styles.video}>
                <Image
                    className={styles.thumbnail}
                    src={snippet.thumbnails.medium.url || undefined}
                    width={snippet.thumbnails.medium.width}
                    height={snippet.thumbnails.medium.height}
                    alt="video thumbnail"
                />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;
