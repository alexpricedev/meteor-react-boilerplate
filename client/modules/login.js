let login = (options) => {
  _validate(options.form);
};

let _validate = (form) => {
  $(form).validate(_validation());
};

let _validation = () => {
  return {
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address'
      },
      password: {
        required: 'Please enter your password'
      }
    },
    submitHandler() {
      _handleLogin();
    }
  };
};

let _handleLogin = () => {
  let email = $('[name="email"]').val();
  let password = $('[name="password"]').val();

  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'warning');
    }
  });
};

Modules.client.login = login;
