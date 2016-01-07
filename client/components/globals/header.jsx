AppHeader = React.createClass({
	/**
	 * Determines which navigation component should
	 * currently be rendered for this user.
	 */
	navigationItems() {
		if (!Meteor.loggingIn() && Meteor.user()) {
			return <AuthenticatedNavigation />;
		} else {
			return <PublicNavigation />;
		}
	},
	render() {
		return (
			<nav role="navigation">
				<a href={FlowRouter.path('index')}>
					Meteor + React Boilerplate
				</a>

				{this.navigationItems()}
			</nav>
		);
	}
});
