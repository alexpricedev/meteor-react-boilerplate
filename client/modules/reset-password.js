let resetPassword = (options) => {
  _validate(options.form);
};

let _validate = (form) => {
  $(form).validate(validation());
};

let validation = () => {
  return {
    rules: {
      newPassword: {
        required: true,
        minlength: 6
      },
      repeatNewPassword: {
        required: true,
        minlength: 6,
        equalTo: '[name="newPassword"]'
      }
    },
    messages: {
      newPassword: {
        required: 'Please enter a new password',
        minlength: 'Please use at least six characters'
      },
      repeatNewPassword: {
        required: 'Please repeast your new password',
        equalTo: 'Your passwords don\'t seem to match'
      }
    },
    submitHandler() {
      _handleReset();
    }
  };
};

let _handleReset = () => {
  let token = FlowRouter.current().params.token;
  let password = $('[name="newPassword"]').val();

  Accounts.resetPassword(token, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert(
				'Your password has successfully been changed',
				'success'
			);
    }
  });
};

Modules.client.resetPassword = resetPassword;
