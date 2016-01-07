Default = React.createClass({
  render() {
    return (
      <div data-tag="app-root">
        <AppHeader />
				{this.props.yield}
      </div>
    );
  }
});
