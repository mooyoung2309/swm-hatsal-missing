import React from 'react';
import './ListItem.scss';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListItem = ({ data }) => {
	const date=data.occrde;
	
	return (
		<div className="Item">
			<Card border="light"  style={{ width: '19rem',height:'100%'}}>
				<Card.Img variant="top" src={(data.tknphotoFile==null)?'https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png':`http://www.safe182.go.kr/api/lcm/imgView.do?msspsnIdntfccd=${data.msspsnIdntfccd }`} alt="photo" id="cardImg"/>
				<Card.Body>
					<Card.Title><b>{data.nm}</b></Card.Title>
					<br/>
					<Card.Text>
						<b className="description">현재나이&nbsp; </b> {data.ageNow}
					</Card.Text>
					<Card.Text>
						<b className="description">발생일시&nbsp; </b> {date.slice(0,4)+"년 "+date.slice(4,6)+"월 "+date.slice(6,8)+"일 "}
					</Card.Text>
					<Card.Text>
						<b className="description">발생위치&nbsp; </b> {data.occrAdres}
					</Card.Text>
					
					<footer>
						<Link to={`/detail/${data.msspsnIdntfccd}`}>
							<b className="more_btn">자세히</b>
						</Link>
					</footer>
				</Card.Body>
				
			</Card>
		</div>
	);
};

export default ListItem;