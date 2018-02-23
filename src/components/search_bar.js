import React,{Component} from 'react';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state ={term:''};
	}

	render(){
		return (
			<div className='search-bar col-md-12'>
			<input
			placeholder="Search..."
			value={this.state.term}
			onChange={event => this.onInputChange(event.target.value)}
			type='text'
			 />
			</div>
			);
	}
	onInputChange(term) {
		this.setState({term});//save changes to search bar props.term
		this.props.onSearchTermChange(term);
	}
}



export default SearchBar;