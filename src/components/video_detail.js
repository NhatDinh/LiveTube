import React from 'react';


const VideoDetail = ({video}) => {
	if(!video) {
	return <div><img className="col-md-8 dragon" width="200" height="250" src={'../style/images/lmao.gif'} /></div>
	}

	const videoId = video.id.videoId;
	//Instead of var url = "https://..." + videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	//Video description 
	let status = video.snippet.liveBroadcastContent;
	//date[0] = 2017-08-04 date[1] = 18:43:48.000Z"
	let date = (video.snippet.publishedAt).split('T');
	//Status gif
	let YTComing = `../style/images/YTComing.gif`;
	let YTLive=`../style/images/YTLive.gif`;

	let statusAnimation =``;

	console.log(date);//testing date

	if(!status) {
		status = "Disconnected";
	}
	else if(status == "live") {
		status = "LIVE NOW";
		statusAnimation = YTLive;
	}	
	else if(status == "upcoming") {
		status = `COMING SOON 
		on ${date[0]}  
		at ${date[1]}`;
		statusAnimation = YTComing;
	}	

	return (
		<div className="col-md-8">
		<div className="video-detail embed-responsive-16by9">
		<iframe width='600' height='400' src={url} className="" ></iframe>
		
		<div className="row video-status">
		
		<h2 className="col-md-8">{status}</h2>
		<img className="col-sm-4" width='600'  src={statusAnimation}/>

		</div>
		<div className="upcoming">
		<img className='col-md-2' width='400' height='150' src={'../style/images/LiveTube.gif'}/>
		<h1 className='col-md-2'>UPCOMING</h1> 
		</div>
		</div>
		</div>
		)
};


export default VideoDetail;