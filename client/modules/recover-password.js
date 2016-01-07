let recoverPassword = (options) => {
  _validate(options.form);
};

let _validate = (form) => {
  $(form).validate(validation());
};

let validation = () => {
  return {
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address'
      }
    },
    submitHandler() {
      _handleRecovery();
    }
  };
};

let _handleRecovery = () => {
  let email = $('[name="email"]').val();

  Accounts.forgotPassword({
    email: email
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'warning');
    } else {
      Bert.alert(
				'Check your email inbox for a password reset link',
				'success'
			);
    }
  });
};

Modules.client.recoverPassword = recoverPassword;
