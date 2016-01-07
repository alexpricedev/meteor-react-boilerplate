let signup = (options) => {
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
        required: true,
        minlength: 6
      }
    },
    messages: {
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address'
      },
      password: {
        required: 'Please enter your password',
        minlength: 'Please use at least six characters'
      }
    },
    submitHandler() {
      _handleSignup();
    }
  };
};

let _handleSignup = () => {
  let user = {
    email: $('[name="email"]').val(),
    password: $('[name="password"]').val()
  };

  Accounts.createUser(user, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert(
				'Welcome! Your account has been setup successfully.',
				'success'
			);
    }
  });
};

Modules.client.signup = signup;
