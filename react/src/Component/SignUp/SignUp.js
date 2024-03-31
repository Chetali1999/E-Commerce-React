import { useState } from 'react';
import '../SignUp/SignUp.css'
import axios from 'axios'

const SignUp = () => {

	const [data, setData] = useState({
		userName: '',
		email: '',
		password: '',
		// confirmPassword: '',
		dob: '',
		role: 'admin'
	})
	const [responseError, setResponseError] = useState()

	// const[a,seta] = useState('chetali')

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	axios({
	// 		method: 'POST',
	// 		baseURL: 'https://reqres.in/api/register',
	// 		url: '/users/signup',
	// 		data: {
	// 			name,
	// 			email,
	// 			password,
	// 			confirmPassword,
	// 			dob,
	// 			role,
	// 		},
	// 	})
	// 		.then(({ data }) => {
	// 			setData(data)
	// 			localStorage.setItem('token', JSON.stringify(data.token))
	// 			localStorage.setItem('data', JSON.stringify(data))
	// 		})
	// 		.catch(err => console.log(err))
	// 	console.log(name,email,password)
	// }


	// const twowayBind = (key,value)=>{

	// 	setData({
	// 		...data,
	// 		[key]:value
	// 	})
	// }

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(data)
	// 	axios.post('https://reqres.in/api/register',data)

	// 		.then(response => {

	// 			if (response.status === 200) {
	// 				setData(data)
	// 				localStorage.setItem('token', data.token)
	// 				console.log(data)
	// 			}
	// 		})
	// 		.catch(error => {
	// 			console.error('error', error);
	// 		});


	// };


	const twowayBind = (key, value) => {
		setData({
			...data,
			[key]: value
		})
	}
	const resetForm = () => {
		setData();
	}

	const handleDataSubmit = (e) => {
		e.preventDefault();
		console.log(data,'ddddddddddd')
		// axios.post('https://reqres.in/api/register/users/signup', data)
		axios.post(`http://localhost:8080/api/user/signUp`, data)
		
			.then(response => {
				if (response.status === 201) {
					localStorage.setItem('userData', JSON.stringify(response.data))
					resetForm();
				}
				else {
					setResponseError(response?.message)
				}
			})
			.catch(error => {
				console.error('error', error);
			});
	}

	return (
		<>
			<div class="container">
				<div class="row">
					<div class="panel panel-primary">
						<div class="panel-body">
							<form role="form" onSubmit={handleDataSubmit}>
								<div class="form-group">
									<h2>Create account</h2>

								</div>
								<div class="form-group mb-3">
									<label class="control-label" for="signupName">Your name</label>
									<input type="text" value={data?.userName} onChange={(e) => { twowayBind('userName', e.target.value) }} maxlength="50" class="form-control" />
								</div>
								<div class="form-group mb-3">
									<label class="control-label" for="signupEmail">Email</label>
									<input type="email" value={data?.email} onChange={(e) => { twowayBind('email', e.target.value) }} maxlength="50" class="form-control" />
								</div>
								<div class="form-group mb-3">
									<label class="control-label" for="signupPassword">Password</label>
									<input type="password" value={data?.password} onChange={(e) => { twowayBind('password', e.target.value) }} maxlength="25" class="form-control" placeholder="at least 6 characters" length="40" />
								</div>
								<div class="form-group mb-3">
									<label class="control-label" for="signupPasswordagain">Confirm Password</label>
									<input type="password" value={data?.confirmPassword} onChange={(e) => { twowayBind('confirmPassword', e.target.value) }} maxlength="25" class="form-control" />
								</div>
								<div class="form-group mb-3">
									<label class="control-label" for="DOB">DOB</label>
									<input type="date" value={data?.dob} onChange={(e) => { twowayBind('dob', e.target.value) }} name="DOB" class="form-control" />
								</div>
								<div class="form-group mb-3">
									<label class="control-label" value={data?.role} onChange={(e) => { twowayBind('role', e.target.value) }} for="role">Role</label>
									<select name="role" class="form-control">
										<option value="admin">Admin</option>
										<option value="user">User</option>
									</select>
								</div>
								<div class="form-group text-center mb-3">
									<button id="signupSubmit" type="submit" class="btn btn-info btn-block">Create your account</button>
								</div>
								<p class="form-group">By creating an account, you agree to our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a>.</p>
								<hr />
								<p className='text-center'>Already have an account? <a href="#">Sign in</a></p>

							</form>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default SignUp;