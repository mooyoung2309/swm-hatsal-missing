import React, { useState, useEffect } from 'react';
import { Row, Col, Image, Typography, Space, Input, Button, List } from 'antd';
import { Helmet } from 'react-helmet';
import ReportPage from './Section/ReportPage';
import axios from 'axios';

const { Text } = Typography;
const { TextArea } = Input;

function DetailPage({match}) {
	const { msspsnIdntfccd } = match.params;
	const [data, setData] = useState({});
	const [mongoData, setMongoData] = useState({});
	const [commentData, setCommentData] = useState("");
	
	const tmp = require('.././LandingPage/response');
	const responseList = tmp.default; 
	
	const itemData = [
		{id: "테스트용 댓글 1"},
		{id: "테스트용 댓글 2"},
		{id: "테스트용 댓글 3"},
		{id: "테스트용 댓글 4"},
		{id: "테스트용 댓글 5"},
		{id: "테스트용 댓글 6"},
	];
	
	const findDataById = (id) => {
		for (var i=0; i<responseList.length; i++) {
			console.log(responseList[i]['msspsnIdntfccd']);
			if (String(responseList[i]['msspsnIdntfccd']) === String(msspsnIdntfccd)) {
				console.log("msspsnIdntfccd 일치 찾음"+i);
				setData(responseList[i]);
				break;
			}
		}
	}
	
	const onChangeHandlerTextArea = (comment) => {
		setCommentData(comment);
	}
	
	const onClickHandlerButton = () => {
		console.log(commentData);
		const url = 'http://swm-hatsal-missing-server.run.goorm.io/missingPeople'
		// axios.post(url, {
		// 	id : msspsnIdntfccd,
		// 	comment: commentData
		//   })
		//   .then(function (response) {
		// 	console.log(response);
		//   })
		//   .catch(function (error) {
		// 	console.log(error);
		//   });
	}

	useEffect(() => {
        // json에서 find
        findDataById(msspsnIdntfccd)
		const url = 'http://swm-hatsal-missing-server.run.goorm.io/tmp'
		axios.get(url, {
			id : msspsnIdntfccd
		  })
		  .then(function (response) {
		 	if(response !== null) {
				setMongoData(response);
			}
		  })
		  .catch(function (error) {
			console.log(error);
		  });
    }, [])
	
    return (
		<>
			<Helmet>
			  	<title>{`${data.nm} / ${data.sexdstnDscd} / ${data.ageNow} / ${data.occrde}`}</title>
			  	<meta charSet="utf-8" />
			  	<meta name="description" property="og:description" content={`${data.occrAdres}`} />
				<meta name="image" property="og:image" content={`http://www.safe182.go.kr/api/lcm/imgView.do?msspsnIdntfccd=${data.msspsnIdntfccd }`} />
   			</Helmet>
			<Row>
				{/* 이미지 */}
				<Col span={8} />
				<Col span={8} style={{ textAlign: 'center' }}>
					<Image
						  style={{display: 'inline-block' }}
						  width={200}
						  src={(data.tknphotoFile==null)?'https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png':`http://www.safe182.go.kr/api/lcm/imgView.do?msspsnIdntfccd=${data.msspsnIdntfccd }`}
					/>
				</Col>
				<Col span={8}/>
			</Row>
			<Row style={{ marginTop: '1rem' }}>
				{/* 텍스트 */}
				<Col span={8} />
				<Col span={8}>
					<Space direction="vertical">
						<span>발생일시 : {data.occrde}</span>
						<span>이름 : {data.nm}</span>
						<span>성별 : {data.sexdstnDscd}</span>
						<span>현재나이 : {data.ageNow}</span>
						<span>실종나이 : {data.age}</span>
						<span>발생장소 : {data.occrAdres}</span>
						{!mongoData ? (<span>추가정보 : {mongoData.info}</span>) : ""}
						<span></span>
					</Space>
				</Col>
				<Col span={8} />
			</Row>
			<Row style={{ marginTop: '1rem' }}>
				{/* 댓글 */}
				<Col span={8}/>
				<Col span={8}>
					<div 
						style={{ overflow:'scroll', overflowX:'hidden', width: "100%", height: "5rem" }}>
						<List
							itemLayout="horizontal"
							dataSource={itemData /*mongoData.comment*/}
							renderItem={item => (
								<List.Item>
									<List.Item.Meta
										description={<span>{item.id /*item*/}</span>}
									>
									</List.Item.Meta>
								</List.Item>
						)}>
						</List>
        			</div>
				</Col>
				<Col span={8} />

			</Row>
			
			<Row style={{ marginTop: '1rem' }}>
				{/* 제보하기 */}
				<Col span={8} />
				<Col span={8} style={{ textAlign: 'center' }}>
					<TextArea 
						onChange={(e) => onChangeHandlerTextArea(e.target.value)}>
					</TextArea>
					<Button 
						style={{ marginTop: '1rem' }} 
						type="primary" block
						onClick={(e) => onClickHandlerButton()}>
					  제보하기
					</Button>
				</Col>
				<Col span={8}/>
			</Row>
			
		</>
    )
}

export default DetailPage
