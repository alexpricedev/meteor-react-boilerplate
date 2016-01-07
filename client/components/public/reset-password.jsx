ResetPassword = React.createClass({
	componentDidMount() {
		Modules.client.resetPassword({
			form: "#reset-password"
		});
	},
	handleSubmit(event) {
		event.preventDefault();
	},
	render() {
		return (
			<div>
				<h4>Reset Password</h4>

				<form
					id="reset-password"
					onSubmit={this.handleSubmit}>

					<p>To reset your password, enter a new one below. You will be logged in with your new password.</p>

					<label htmlFor="newPassword">
						New Password
					</label>
					<input
						type="password"
						id="newPassword"
						name="newPassword"
						placeholder="New Password" />

					<label htmlFor="repeatNewPassword">
						Repeat New Password
					</label>
					<input
						type="password"
						id="repeatNewPassword"
						name="repeatNewPassword"
						placeholder="Password" />

					<button>
						Reset Password & Login
					</button>
				</form>
			</div>
		);
	}
});
