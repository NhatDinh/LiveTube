import React from 'react';
import UpcomingVideoListItem from './upcoming_video_list_item';

const UpcomingVideoList = (props) => {
	const upcomingVideoItems = props.videos.map((video) => { 
		return <UpcomingVideoListItem 
		onVideoSelect={props.onVideoSelect}
		key={video.etag} 
		video ={video} />
	});

	return (
		<div className="col-md-8">
		<ul className="upcoming-list-group">
		{upcomingVideoItems}
		</ul>
		</div>
		);
};


export default UpcomingVideoList;