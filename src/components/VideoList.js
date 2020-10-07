import React from 'react';
import VideoItem from './VideoItem';

// Automatically pull out videos from props
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
        return (
            <VideoItem
                onVideoSelect={onVideoSelect}
                video={video}
                key={video.id.videoId}
            />
        );
    });

    return (
        <div className="ui relaxed dvided list">
            {renderedList}
        </div>
    )
}

export default VideoList;
