import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListItem from "./ListItem";
import { Helmet } from "react-helmet";
import "./LandingPage.scss";
import "./response";

function LandingPage(props) {

	const responseList = require('./response')

	const headers = {
		"Access-Control-Allow-Origin": "http://www.safe182.go.kr/api/lcm/findChildList.do",
		};
	
	useEffect(() => {
		const url = 'http://www.safe182.go.kr/api/lcm/findChildList.do'
		axios.post(url, {
			authKey: `${process.env.REACT_APP_API_KEY}`,
			esntlId: `${process.env.REACT_APP_API_ID}`,
			rowSize: 100
		  }, {
headers: headers
})
		  .then(function (response) {
			console.log(response);
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	},[]);
	
	
		return (

			<div className="Home">
				<Helmet>
					<meta charSet="utf-8" />
					<title>실종 아동 전단지</title>
				</Helmet>
			<div className="Title">
				실종 아동 전단지
			</div>
			<div className="List">
				{responseList.default.map((data) => <ListItem key={data.msspsnIdntfccd} data={data} />)}
			</div>
		</div>
	
		
	);
}

export default LandingPage;