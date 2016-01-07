RecoverPassword = React.createClass({
	componentDidMount() {
		Modules.client.recoverPassword({
			form: "#recover-password"
		});
	},
	handleSubmit(event) {
		event.preventDefault();
	},
	render() {
		return (
			<div>
				<h4>Recover Password</h4>

				<form
					id="recover-password"
					onSubmit={this.handleSubmit}>

					<p>Enter your email address below to receive a link to reset your password.</p>

					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email Address" />

					<button>
						Recover password
					</button>
				</form>
			</div>
		);
	}
});
