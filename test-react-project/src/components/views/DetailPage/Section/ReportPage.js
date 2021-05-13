import React, { useState } from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

function ReportPage(props) {
	
    return (
		<>
			<TextArea></TextArea>
			<Button style={{ marginTop: '1rem' }} type="primary" block>
			  제보하기
			</Button>
		</>
		  
    )
}

export default ReportPage
