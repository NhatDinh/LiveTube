import React from  'react';


const HomeIcon = ({onUpdate}) => {
	const keywords = ['fkj','tom misch','elon musk','music','dance','spacex','ethereum','stripe','music','patrick collison','stellar','music','festival','fun','love','life','prank','shark tank','random'];
	let random = Math.floor((Math.random() * 20) + 1);
	let updateKeyword = keywords[random];
	return (
		<a className='home_icon'>
		<img
		onClick={() => onUpdate(updateKeyword) }
		src={'../style/images/coolcouple.gif'}
		className='col-md-2' width='200' height='180' />
		</a>
		);


};

export default HomeIcon;