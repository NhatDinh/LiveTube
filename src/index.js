import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import search from 'youtube-search';
import axios from 'Axios';

//IMPORT COMPONENTS
import VideoDetail from './components/video_detail';
import LiveVideoList from'./components/live_video_list';
import SearchBar from './components/search_bar';
import UpcomingVideoList from './components/upcoming_video_list';
import HomeIcon from './components/home_icon';

const API_KEY = "AIzaSyCZJxQ_zU3rmldovDwgf4_ELj3q9IY3hdk";
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
		console.log('init key:' + initKeyword);//testing yo
		this.videosSearch(initKeyword);

	}

	videosSearch(keyword){
		//TODO: Implement a search method from scratch using Fetch or Axios or whatever
		console.log('method search running')
		keyword = 'postmalone'
		const url = 'https://www.googleapis.com/youtube/v3/search?q={{keyword}}&part=snippet&type=video&key=AIzaSyCZJxQ_zU3rmldovDwgf4_ELj3q9IY3hdk'
		axios.get(url).then(response => console.log(response));

		/* 
		searchYoutube({key: API_KEY, term: keyword, eventType: 'live'}, (responses) => {
			this.setState({
				liveVideos: responses,
				selectedVideo: responses[0]
			});
			console.log(responses);
			console.log(responses[0]);

		});
		//search for upcoming live videos
		searchYoutube({key: API_KEY, term: keyword, eventType: 'upcoming'}, (responses) => {
			this.setState({
				upcomingVideos: responses,
			});
			console.log('Upcoming', responses);
		});*/
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
