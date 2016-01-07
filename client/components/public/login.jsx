Login = React.createClass({
	componentDidMount() {
		Modules.client.login({form: "#login"});
	},
	handleSubmit(event) {
		event.preventDefault();
	},
	render() {
		return (
			<div>
				<form
					id="login"
					onSubmit={this.handleSubmit}>

					<h1>Login</h1>

					<div className="form-group">
						<label
							htmlFor="email">
								Email Address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email address" />
					</div>

					<div className="form-group">
						<label
							htmlFor="password">
								Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Enter your password" />
					</div>

					<button title='Login'>
						Login
					</button>

					<a href={FlowHelpers.pathFor('signup')}>New? Sign up here</a>
					<a href={FlowHelpers.pathFor('recover-password')}>Forgot password</a>

				</form>
			</div>
		);
	}
});
