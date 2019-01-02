class UserDecorator {
  constructor(user) {
    this.user = user
  }

  name() {
    return [this.user.firstName, this.user.lastName].join(' ')
  }

  serialize() {
    return {
      id: this.user._id,
      name: this.name(),
    }
  }
}

module.exports = UserDecorator
