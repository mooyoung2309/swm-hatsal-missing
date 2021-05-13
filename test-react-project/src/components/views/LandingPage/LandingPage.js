import React, {useState, useEffect} from 'react';
import axios from 'axios';

function LandingPage(props) {
	const [message, setMessage] = useState("");
	const [list,setList] = useState(null);

	useEffect(() => {
		console.log("useEffect");
		axios.get('https://swm-hatsal-missing-server.run.goorm.io/hello')
		.then(response => console.log(response))
		.then(message => {
			setMessage(message);
			console.log(message);
		})
		.catch((err) => {
			console.log(err);
		});
	},[])

    return (
        <div>
           <span>{message}</span>
			<span>helloworld</span>
        </div>
    )
}

function AxiosApi(){
	const [data, setData] = useState([]);
	
	const url = 'http://www.safe182.go.kr/api/lcm/findChildList.do'
	axios.post(url, {
		authKey: `${process.env.REACT_APP_API_KEY}`,
		esntlId: `${process.env.REACT_APP_API_ID}`,
		rowSize: 100
	  })
	  .then(function (response) {
		setData(response.data);
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });
	return (data)
}
export default LandingPage;