import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import search from 'youtube-api-search';

//IMPORT COMPONENTS
import VideoDetail from './components/video_detail';
import LiveVideoList from'./components/live_video_list';
import SearchBar from './components/search_bar';
import UpcomingVideoList from './components/upcoming_video_list';
import HomeIcon from './components/home_icon';

const API_KEY = "AIzaSyCR6qSAW-NtKq31C63XzyYDiZ7tsTty9gg";
class App extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			liveVideos: [],
			upcomingVideos:[],
			selectedVideo: null,
			keyword:''
		};

		const initKeywords = ['fkj','tom misch','elon musk','music','dance','spacex','ethereum','stripe','music','patrick collison','stellar','music','festival','fun','love','life','prank','shark tank','random'];
		let random = Math.floor((Math.random() * 20) + 1);
		const initKeyword = initKeywords[random];
		console.log('UNIT TEST: initKeyword =',initKeyword);
		this.videosSearch(initKeyword);//INIT PAGE LOADING 

	}

	videosSearch(keyword){
		//search for live videos
		search({key: API_KEY, term: keyword, eventType: 'live'}, (responses) => {
			this.setState({
				liveVideos: responses,
				selectedVideo: responses[0]
			});
			console.log(responses);//test
			console.log(responses[0]);//test

		});
		//search for upcoming live videos
		search({key: API_KEY, term: keyword, eventType: 'upcoming'}, (responses) => {
			this.setState({
				upcomingVideos: responses,
			});
			console.log('Upcoming', responses);
		});
	}
	render() {
	return (
		
		<div className="row header">
		<HomeIcon
		
		onUpdate={(keyword) => this.videosSearch(keyword)} />

		<h1 className="col-md-3">Live<br/>tubE</h1>

		<SearchBar 
		onSearchTermChange={(keyword) => this.videosSearch(keyword)}/>

		<div className="row"> 
		<VideoDetail className="col-md-6" video={this.state.selectedVideo} />
		

		<div className='row'>
		<img className='col-md-2' width='80' height='90' src={'../style/images/YTLiveMain.gif'}/>
		<h1 className='col-md-2'>LIVE <br/>NOW!</h1> 
		
		
		<LiveVideoList 
		onVideoSelect={(selectedVideo) => this.setState({selectedVideo}) }
		className="col-md-6" 
		videos={this.state.liveVideos} />
		
		
		<UpcomingVideoList 
		className="upcoming-list col-md-5"
		onVideoSelect={(selectedVideo) => this.setState({selectedVideo}) }
		videos={this.state.upcomingVideos} />
		</div>
		</div>
		
		</div>
		
		

		);
}
};




ReactDOM.render(<App />, document.querySelector('.container'));
