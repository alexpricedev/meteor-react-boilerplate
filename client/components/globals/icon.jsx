Icon = React.createClass({
	propTypes :{
		/**
		 * The name of the FontAwesome icon to use.
		 * http://fontawesome.io
		 */
		icon: React.PropTypes.string.isRequired
	},
	render() {
		const cls = `fa fa-${this.props.icon}`;
		return (
			<i
				className={cls}
				aria-hidden="true">
			</i>
		);
	}
});
