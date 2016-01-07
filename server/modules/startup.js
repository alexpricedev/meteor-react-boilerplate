let startup = () => {
  // _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
};

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setBrowserPolicies = () => {
	BrowserPolicy.content.allowOriginForAll('fonts.googleapis.com');
	BrowserPolicy.content.allowFontOrigin('fonts.gstatic.com');
};

var _generateAccounts = () => Modules.server.generateAccounts();

Modules.server.startup = startup;
