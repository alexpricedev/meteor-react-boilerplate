Signup = React.createClass({
	componentDidMount() {
		Modules.client.signup({
			form: "#signup"
		});
	},
	handleSubmit(event) {
		event.preventDefault();
	},
	render() {
		return (
			<div>
				<h1>Sign Up</h1>

				<form
					id="signup"
					onSubmit={this.handleSubmit}>

					<label htmlFor="email">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email Address" />

					<label htmlFor="password">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Password" />

					<button>
						Sign up
					</button>
				</form>

				<p>
					Already have an account?
					<a href={FlowHelpers.pathFor('login')}>Log In</a>.
				</p>
			</div>
		);
	}
});
