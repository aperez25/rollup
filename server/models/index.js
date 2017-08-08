const User = require('./user');
const Email = require('./email');

User.belongsToMany(Email, { through: 'user_emails' });
Email.belongsTo(User);