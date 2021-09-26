import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onVideoSelect={() => onVideoSelect(video)} className="video-item item">
            <img className="video-item" alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;