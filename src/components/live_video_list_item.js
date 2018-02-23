import React from 'react';


const LiveVideoListItem = ({video, onVideoSelect}) => {
	console.log(video);
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item"> {/*Event handler */}
		<div className="media">
		<div className="media-left">
		<img className="media-object" src={imageUrl} />
		</div>

	{/*Video representation */}
		<div className='media-body'>
		<div className='media-heading'><h8>{video.snippet.title}</h8></div>
		
		</div>
		</div>
		
		</li>
		);
};






export default LiveVideoListItem;