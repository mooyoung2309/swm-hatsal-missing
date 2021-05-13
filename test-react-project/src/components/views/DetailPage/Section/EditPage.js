import React, { useState } from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

function EditPage(props) {
	
    return (
		<>
			<TextArea></TextArea>
			<Button style={{ marginTop: '1rem' }} type="primary" block>
			  추가하기
			</Button>
		</>
		  
    )
}

export default EditPage