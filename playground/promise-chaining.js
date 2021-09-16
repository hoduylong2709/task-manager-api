require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('613b67f0a37f00a465efccc0', { age: 21 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 0 })
//   })
//   .then(result => console.log(result))
//   .catch();

const updateAgeAndCount = async (id, age) => {
  await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('613c373d5edd5c9457fc8fda', 21)
  .then(count => console.log(count))
  .catch(error => console.log(error));