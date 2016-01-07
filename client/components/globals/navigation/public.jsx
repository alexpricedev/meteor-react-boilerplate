PublicNavigation = React.createClass({
	render() {
		return (
			<ul>
				<li>
					<a href={FlowHelpers.pathFor('login')}>
							Login
					</a>
				</li>
			</ul>
		);
	}
});
