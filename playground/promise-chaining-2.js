require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('613caceb089643499d9a6598')
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: true });
//   })
//   .then(result => console.log(result))
//   .catch();

const deleteTaskAndCount = async id => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('613b6e014ab6b515fa14b6b5')
  .then(count => console.log(count))
  .catch(error => console.log(error));