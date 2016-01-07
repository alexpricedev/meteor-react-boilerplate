AuthenticatedNavigation = React.createClass({
	render() {
		return (
			<ul>
				<li>
					<a href={FlowHelpers.pathFor('index')}>
						Home
					</a>
				</li>
				<li>
					<a
						href="#"
						onClick={Meteor.logout}>
							Logout
					</a>
				</li>
			</ul>
		);
	}
});
