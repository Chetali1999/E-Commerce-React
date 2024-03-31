import { useState, useEffect } from 'react';
import '../SignIn/SignIn.css'
import axios from 'axios'

const SignIn = () => {

	const [inputData, setInputData] = useState({
		email: '',
		password: '',
	});
	const [responseError, setResponseError] = useState()


	const twowayBind = (key, value) => {
		setInputData({
			...inputData,
			[key]: value
		})
	}

	const resetForm = () => {
		setInputData();
	}

	const handleDataSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/api/user/signIn', inputData).then(response => {
			console.log(response, 'ressssssssssssssssssssssssssss')
			if (response.status === 201) {
				localStorage.setItem('userData', JSON.stringify(response.data))
				resetForm();
			}
			else {
				setResponseError(response?.message)
			}
		})

	}
	{/* <a href="https://ibb.co/fnLf3br">
	<img 
	src="https://i.ibb.co/gPhN0Gt/image-2023-09-14-T13-39-15-924-Z.png" 
alt="image-2023-09-14-T13-39-15-924-Z" border="0"></a> */}


	return (
		<>
			<div class="container">
				<div class="row">
					<div class="panel panel-primary">
						<div class="panel-body">
							<form method="GET" role="form" onSubmit={(e) => { handleDataSubmit(e) }}>
								<div class="form-group">
									<h2>Log In</h2>
								</div>
								<div class="form-group mb-3">
									<label class="control-label" for="signinEmail">Email</label>
									<input type="email" maxlength="50" class="form-control" value={inputData?.email ?? ""}
										onChange={(e) => { twowayBind('email', e.target.value) }} />
								</div>
								<div class="form-group mb-3">
									<label class="control-label" for="signinPassword">Password</label>
									<input type="password" maxlength="25" class="form-control" placeholder="at least 6 characters" length="40" value={inputData?.password ?? ""}
										onChange={(e) => { twowayBind('password', e.target.value) }} />
								</div>
								<div class="form-group text-center mb-3">
									<button type="submit" class="btn btn-info btn-block">Log In</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SignIn;