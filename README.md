# Meteor + React Boilerplate

This is a Meteor and React starter kit. It was originally forked from
[themeteorchef/base](https://github.com/themeteorchef/base) and customised to
my personal needs.

It is designed for projects with completely custom front-ends and
therefore is totally unstyled.

## Quick start

Clone & run `meteor`. Easy!

## Features

- Public and authenticated routing pattern using
  [Flow Router](https://github.com/kadirahq/flow-router).
- React templating with rendering support via
  [React Layout](https://github.com/kadirahq/meteor-react-layout).
- Basic accounts workflow using
  [accounts-password](http://docs.meteor.com/#/full/accounts_passwords),
  including: login, logout, recover password, and reset password.
- Automatic account creation for an administrator and five test users.
- A collection of packages for adding additional functionality.

### Noticeable differences from
    [`themeteorchef/base`](https://github.com/themeteorchef/base)

- Converted templates to React (`.jsx`)
- Removal of Bootstrap and associated markup

### Additions

- [FontAwesome](https://fortawesome.github.io/Font-Awesome/)
- Basic `SCSS` folder structure, mixins and sane defaults
- Basic Flow Router and formatting helpers I use in every project
- [BrowserPolicy](https://github.com/meteor/meteor/tree/devel/packages/browser-policy)
  for inclusion of Google Fonts

For a more detailed explanation of all of the features and opinions in this
boilerplate, please refer to the excellent
[page](https://themeteorchef.com/base/) by Ryan Glover
([The Meteor Chef](https://twitter.com/themeteorchef))

### Contributors

- [Alex Price](https://github.com/alexpriceonline)
  ([@alexpriceonline](https://twitter.com/alexpriceonline))
