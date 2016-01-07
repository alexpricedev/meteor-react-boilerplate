let fullName = (user) => {
  return user.profile.name.first + ' ' + user.profile.name.last;
};

let emailAddress = (user) => {
  return user.emails[0].address;
};

Format = {
  fullName: fullName,
  emailAddress: emailAddress
};
