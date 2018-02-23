
import React from 'react';
import LiveVideoListItem from './live_video_list_item';

const LiveVideoList = (props) => {
	const liveVideoItems = props.videos.map((video) => { 
		return <LiveVideoListItem 
		onVideoSelect={props.onVideoSelect}
		key={video.etag} 
		video ={video} />
	});

	return (
		<div className="col-md-4">
		<ul className="list-group">
		{liveVideoItems}
		</ul>
		</div>
		);
};


export default LiveVideoList;