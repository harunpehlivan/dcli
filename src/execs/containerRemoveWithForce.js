const exec = require('child_process').exec;
const colors = require('colors');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/remove-f.sh');

module.exports = function(container) {
  exec(`sh ${sh} ${container}`, (err, stdout, stderr) => {
    if (!err) {
      console.log('Container %s is successfully removed with force!', colors.cyan(container));
    } else {
      console.log(colors.red(err));
    }
  });
};
